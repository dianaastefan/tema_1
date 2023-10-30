import React from 'react';
import styles from './Card.module.css';

function Card() {
  return (
    <div className={styles.card}> 

        <div className={styles.first}>
        <div className={styles.space}>T -1</div>
        <div className={styles.todo}>Todo</div>
        </div>
        

        <div className={styles.text}>Create a Design System for Enum Workspace.</div>

        <div className={styles.last}>
        <div className={styles.textDate}>Due Date</div>
        <div className={styles.date}>24/01/2021</div>
        </div>

        
    
    </div>
  )
}

export default Card;