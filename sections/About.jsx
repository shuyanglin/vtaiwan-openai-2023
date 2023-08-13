'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title=" 關於 vTaiwan | About vTaiwan" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[18px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">vTaiwan</span>  作為政策或法律制定前的前導討論平台，積極邀請公民參與重要議題的討論，整理議題爭點與初步可能的共識方向，以此作為修改或制定法規的基礎。vTaiwan的歷史案例中包括Uber自用載客車、網路霸凌、遠距健康照護等議題，在此基礎上已影響超過 25 項法規的修正與調適，同時也對國際社群嘗試由公民社群發起的法規調適實驗產生影響。
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[24px]"
      />

      <br className="md:block hidden" /> 
      

      <TypingText title=" 意見徵集緣起 | About the consultation" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[24px] text-[18px] text-center text-secondary-white"
      >
        在 2023 年 5 月，<span className="font-extrabold text-white">OpenAI Inc</span>（OpenAI的非營利組織）提供了 10 筆 100,000 美元的實驗資金，廣泛邀請國際團隊建立一個或多個民主流程，以就未來AI人工智慧應遵循的規則進行商討、審議和決策。與此同時， vTaiwan 於 2023 年 7 月與英國的 Chatham House 合作，成功提交名為「Bridging the Recursive Public」的計畫申請，並獲得了這項實驗金。此計畫旨在善用 vTaiwan 現有的流程，討論未來 AI 人工智慧應該遵循的價值觀和規則。同時，我們的英國合作夥伴將在倫敦跟進 vTaiwan 的流程，從同樣的議題切入討論，根據議題的發展演變每週調整流程，並將意見徵集和諮詢的目標擴展至國際層面。

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
