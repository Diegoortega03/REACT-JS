

import styles from "./Home.module.css";

export const Home = () => {
  return (

    <>
    <div className={styles.heroContainer}>
    <div className={styles.heroText}>
      <h1 className={styles.heroTitle}>CHOUPO</h1>

  
    </div>
  </div>


<div className={styles.cards}>
  <div className={styles.card}>
  <div className={styles.cardText}>
    <h2>Título de la tarjeta</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  </div>
  

   
</div>

<div className={styles.cardDos}>
  <div className={styles.cardText}>
    <h2>Título de la tarjeta</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
  </div>
  

   
</div>

</div>
  

  </>
  );
};
