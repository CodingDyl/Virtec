import React from 'react'
import { styles } from '../styles'
import { useForm } from '@mantine/form';
import { Box, Button, Group, TextInput } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

const LandingPage = () => {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        }
    })
  return (
    <>
    <div className='py-10 w-full px-[5%] lg:px-[15%] flex flex-col justify-start items-center mx-auto text-center'>
            <div className='flex flex-col gap-2 text-center'>
                <h3 className={`text-2xl md:text-6xl text-secondary uppercase tracking-wider text-center`}>--Free Guide--</h3>
                <h1 className="text-2xl md:text-5xl lg:text-6xl text-center font-bold py-10">
                    4 Simple Steps to Quickly Attract More Clients For Your Business With Meta Ads
                </h1>
            </div>
            <div className='flex flex-col gap-6 w-[80%] mb-10'>
                <p className='text-md md:text-2xl'>Facebook and Instagram are the quickest and most cost-effective ways to attract the perfect clients for your business.</p>
                <p className='text-md md:text-2xl'>In this free guide we tell you how to do exactly that. No jargon, no technical mumbling, just an easy to follow step-by-step overview of what exactly to do.</p>
            </div>
            <Box mx="auto" className='text-left w-full p-10 border-white border-2'>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder='your@email.com'
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <Group justify='center' mt="md">
                    <Button className='text-white bg-black hover:bg-slate-600 hover:border-white w-full md:w-[50%] rounded-xl' type='submit' rightSection={<IconArrowRight size={14} />}>Send Me The Guide</Button>
                    </Group>
                    
                </form>
            </Box>
    </div>
    </>
  )
}

export default LandingPage