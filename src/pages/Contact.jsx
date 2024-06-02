import { TextInput, Textarea, SimpleGrid, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Button } from '@mantine/core';
import AlertComp from '../components/AlertComp';

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
    phone: "",
    company: ""
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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
      const title = "Missing Info"
      const message = "Please fill out all the required fields correctly."
      const color = "#2563eb"
      setAlert({title, message, color});

      setTimeout(() => {
        setAlert(null);
      }, 3000);
      return;
    }

    setLoading(true);

    emailjs.send(
        'service_8ug5t08',
        'template_89r4q4d',
        {
          from_name: form.name,
          to_name: "Dylan",
          from_email: form.email,
          to_email: "2610dylan@gmail.com",
          message: form.message,
          company: form.company,
          phone: form.phone,
          subject: form.subject
        },
        'i_IFgvR2F8kYMIPmq'
      )
      .then(
        () => {
          setLoading(false);
          const title = "Success!"
          const message = "Thank you. I will get back to you as soon as possible.";
          const color = "teal";
          setAlert({title, message, color});

          setForm({
            name: "",
            email: "",
            subject: "",
            phone: "",
            company: "",
            message: "",
          });

          setTimeout(() => {
            setAlert(null);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          const title = "Error!"
          const message = "Ahh, something went wrong. Please try again.";
          const color = "red";
          setAlert({title, message, color});

          setTimeout(() => {
            setAlert(null);
          }, 3000);
        }
      );
  };

  return (
    <>
    {alert && <AlertComp title={alert.title} msg={alert.message} col={alert.color} />}
    <span id='contact'>
        &nbsp;  
    </span>
    <motion.section
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      

        

        <div className='bg-black/20 border-2 border-white/[0.2] rounded-lg p-10 bord'>
        <motion.div>
                <p className={styles.sectionSubText}>Get In Touch</p>
                <h2 className={styles.sectionHeadTextContact}>CONTACT US.</h2>
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

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
        <TextInput
          label="Company"
          placeholder="Your company"
          name="company"
          value={form.company}
          onChange={handleChange}
          variant="filled"
        />
        <TextInput
          label="Phone"
          placeholder="Your phone number"
          name="phone"
          onChange={handleChange}
          value={form.phone}
          variant="filled"
        />
      </SimpleGrid>

      <TextInput
        label="Subject"
        placeholder="What is your most important question?"
        value={form.subject}
        onChange={handleChange}
        mt="md"
        name="subject"
        variant="filled"
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="How can we help your business..."
        value={form.message}
        onChange={handleChange}
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
      />

      <Group justify="center" mt="xl">
      <Button size='md'
        className="rounded-full border border-blue-500 hover:border-white hover:bg-white/5 hover:translate-y-[-4px] focus:ring-2 focus:ring-blue-500  w-[50%] md:w-[25%] relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" type='submit'>
          { loading ? "Sending..." : "Send" }
        </Button>
      </Group>
    </form>
    </div>
    </motion.section>
    </>
  );
}