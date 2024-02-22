import { TextInput, Textarea, SimpleGrid, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Button } from '../components/moving-border';
import { InfiniteMovingCardsMain } from '../components/InfiniteMovingCardsMain';

export function Contact() {

  const formRef = useRef();


  const validate = {
    name: (value) => value.trim().length < 2,
    email: (value) => !/^\S+@\S+$/.test(value),
    subject: (value) => value.trim().length === 0,
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      validate.name(form.name) ||
      validate.email(form.email) ||
      validate.subject(form.subject)
    ) {
      // If any validation fails, display error message and prevent email sending
      setLoading(false);
      alert("Please fill out all the required fields correctly.");
      return;
    }

    setLoading(true);

    emailjs.send(
        'service_8ug5t08',
        'template_89r4q4d',
        {
          from_name: form.name,
          to_name: "Jasha Consulting",
          from_email: form.email,
          to_email: "shaun@jasha.co.za",
          message: form.message,
        },
        'i_IFgvR2F8kYMIPmq'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
    <span id='contact'>
        &nbsp;  
    </span>
    <motion.section
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >

        

        <div className='bg-black/20 border-2 border-white/[0.2] rounded-lg p-10 bord'>

        <motion.div>
                <p className={styles.sectionSubText}>Get In Touch</p>
                <h2 className={styles.sectionHeadTextContact}>Contact Us.</h2>
            </motion.div>
            <form ref={formRef} onSubmit={handleSubmit}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="filled"
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          onChange={handleChange}
          value={form.email}
          variant="filled"
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        mt="md"
        name="subject"
        variant="filled"
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
      />

      <Group justify="center" mt="xl">
      <Button borderRadius="1.75rem"
        className="bg-black/20 text-white hover:bg-black border-slate-800">
          { loading ? "Sending..." : "Send" }
        </Button>
      </Group>
    </form>
    </div>
    </motion.section>
    </>
  );
}