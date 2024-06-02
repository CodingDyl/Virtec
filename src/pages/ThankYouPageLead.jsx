import React from "react";
import { TextInput, Textarea, SimpleGrid, Group, Button } from '@mantine/core';
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import AlertComp from "../components/AlertComp";

const ThankYouPageLead = () => {
    const formRef = useRef();
    const navigate = useNavigate();


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
            to_name: "Virtec Marketing",
            from_email: form.email,
            to_email: "info@virtecmarketing.com",
            message: form.message,
            subject: form.subject,
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

            window.scrollTo(0, 0);
            navigate("/application/thank-you")
  
            setForm({
              name: "",
              email: "",
              subject: "",
              message: "",
            });

            setTimeout(() => {
              setAlert(null);
            }, 3000);
          },
          (error) => {
            setLoading(false);
            console.error(error);

            window.scrollTo(0, 0);
            navigate("/application/thank-you")
  
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
      <div className="py-10 w-full px-[5%] lg:px-[15%] flex flex-col justify-start items-center mx-auto text-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl md:text-6xl lg:text-7xl text-center font-bold py-10">
            Thank You!
          </h1>
        </div>
        <div className="flex flex-col gap-6 w-[80%] mb-10">
          <p className="text-md md:text-2xl">
            Your free guide is on its way and will arrive in your mailbox within
            five minutes.
            <br />
            Check your SPAM folder if it doesn't arrive within that timeframe.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-center p-5">
            Want To Know What We Can Do For You?
          </h1>
          <div className="w-[80%] text-center mx-auto">
          <p className="text-md md:text-2xl">
            Would you like to know what we could do for you? Fill out the form
            and we will get back to you. <br /> No obligations, no annoying high
            pressure sales tactics. We both have better things to do.
          </p>
          </div>
        </div>

        <div className='bg-black/20 border-2 border-blue-500 rounded-lg p-10 bord mt-10 text-left'>
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
            <Button
              type="submit"
              className="rounded-lg border border-blue-500 hover:border-white hover:bg-white/5 hover:translate-y-[-4px] focus:ring-2 focus:ring-blue-500  w-[80%] relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </Group>
        </form>
        </div>
      </div>
    </>
  );
};

export default ThankYouPageLead;
