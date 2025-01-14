"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { styles } from "../styles";
import { useForm } from "@mantine/form";
import { Box, Button, Group, TextInput } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Footer from "./Footer";
import NavbarBlogs from "../components/blog-components/NavbarBlogs";
import { Link, useNavigate } from "react-router-dom";
import AlertComp from "../components/AlertComp";

const LandingPageMain = () => {
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = (values) => {
    console.log(values);

    const title = "Success!"
    const message = "Your free guide is coming your way!"
    const color = "teal"
    setAlert({title, message, color})

    window.scrollTo(0, 0);
    setTimeout(() => {
      setAlert(null);
      navigate("/free-guide/thank-you")
    }, 3000);
  }
  return (
    <>
    {alert && <AlertComp title={alert.title} msg={alert.message} col={alert.color} />}
    <div className="z-20 min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="pb-32 md:pb-20"></div>
      <NavbarBlogs />
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex flex-col gap-2 text-center">
          <h3
            className={`text-2xl md:text-6xl text-secondary uppercase tracking-wider text-center`}
          >
            --Free Guide--
          </h3>
          <h1 className="text-2xl md:text-5xl lg:text-6xl text-center font-bold py-10">
            4 Simple Steps to Quickly Attract More Clients For Your Business
            With Meta Ads
          </h1>
        </div>
        <div className="flex flex-col gap-6 mb-10 text-center">
          <p className="text-md md:text-2xl">
            Facebook and Instagram are the quickest and most cost-effective ways
            to attract the perfect clients for your business.
          </p>
          <p className="text-md md:text-2xl">
            In this free guide we tell you how to do exactly that. No jargon, no
            technical mumbling, just an easy to follow step-by-step overview of
            what exactly to do.
          </p>
        </div>
        <Box
          mx="auto"
          className="relative z-10 text-left w-full p-10 border-white border-2"
        >
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <Group justify="center" mt="md">
              <Button
                className="rounded-lg border border-blue-500 hover:border-white hover:bg-white/5 hover:translate-y-[-4px] focus:ring-2 focus:ring-blue-500  w-[80%] relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                type="submit"
                rightSection={<IconArrowRight size={14} />}
              >
                Send Me The Guide
              </Button>
            </Group>
          </form>
        </Box>
      </div>
      <BackgroundBeams />
      <div className="w-[100%]">
        <Footer />
      </div>
    </div>
    </>
  );
};

export default LandingPageMain;
