'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
       <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          登記報名
        </h4>
        
        <Link href="https://forms.gle/o4xq5rSvYyRAQCfU8">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img
              src="/writing.svg"
              alt="signup"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              報名參加諮詢會議
            </span>
          </button>
        </Link>
      </div> 

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            vTaiwan
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            CC BY-NC-SA 4.0 vTaiwan
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Link href={social.link}>
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
