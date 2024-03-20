import React from 'react';
import styles from './Why.module.css';
import bookImage from './assets/book.png';
import growthImage from './assets/growth.png';
import transparencyImage from './assets/transparency1.png';
import advancementImage from './assets/advancement.png';

export default function WhyCaro() {
  return (
    <>
      <div className={styles.container12}>
      <h1 className={styles.heading}>Why work at Chhabria Housing</h1>
      <br/>
      <div className={styles.content}>
        <img className={styles.image} src={bookImage} alt="Book" />
        <div className={styles.data}>Dynamic Learning Environment
          <h2 className={styles.info}>
          Step into a dynamic learning environment where growth knows no bounds. Here, you'll embark on a journey filled with innovative projects, surrounded by a collaborative team eager to share knowledge and expertise. Join us and unleash your potential to thrive and excel in your career.
          </h2>
        </div>
      </div>
      <div className={styles.content}>
        
        <img className={styles.image} src={growthImage} alt="Growth" />
        <div className={styles.data}>
          Personalized Career Development
          <h2 className={styles.info}>
          At our company, we understand that each career journey is unique. That's why we offer personalized career development tailored to your aspirations and goals. From mentorship programs to specialized training, we're committed to helping you chart a path that aligns with your ambitions and ensures meaningful growth and success.
          </h2>
        </div>
      </div>
      <div className={styles.content}>
        <img className={styles.image} src={transparencyImage} alt="Transparency" />
        <div className={styles.data}>Transparent Work Culture
          <h2 className={styles.info}>
            In our workplace, transparency is more than just a buzzword - it's a way of life. Experience a culture where open communication, honesty, and integrity are valued. From leadership updates to project feedback, we believe in sharing information openly, fostering trust, collaboration, and a sense of belonging among our team members.
          </h2>
        </div>
      </div>
      <div className={styles.content}>
        
        <img className={styles.image} src={advancementImage} alt="Advancement" />
        <div className={styles.data}>Proven Career Advancement
          <h2 className={styles.info}>
          Join our team and unlock the path to proven career advancement. With a track record of nurturing talent and promoting from within, we offer opportunities for growth and progression based on merit and dedication. Elevate your career with us, where your potential is recognized, and your ambitions are realized.
          </h2>
        </div>
      </div>
    </div>

    </>
  );
}