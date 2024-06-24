import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>:)</h1>
      <p className={styles.subtitle}>hi!</p>
    </div>
  );
};

export default Hero;