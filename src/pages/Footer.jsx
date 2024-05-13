import { motion } from 'framer-motion';
import { styles } from '../styles';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';
import { headset } from '../assets';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { IconChartAreaLineFilled } from '@tabler/icons-react';

const Footer = () => {
  return (
    <motion.footer
    variants={footerVariants}
    className={`${styles.paddings} py-8 relative mt-10`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
        You Win. We Win.
        </h4>
        <a href="#about">
        <Button size='xl' leftSection={<IconChartAreaLineFilled size={32} strokeWidth={2} color={'#f1f1f1'}/>}
        className="bg-black rounded-full border-blue-500 text-white flex gap-6 justify-center hover:border-white hover:bg-white/5">
          <span className="font-bold text-[16px] text-white">
            Our Solution
          </span>
        </Button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Virtec Marketing</h4>
          <p className="font-normal text-white opacity-50">
            Copyright &copy; 2024 Virtec Marketing. All rights reserved
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link to={social.link} target='_blank'><img
              key={social.name}
              src={social.url}
              alt={social.name}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            /></Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
  )
}

export default Footer