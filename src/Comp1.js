import React from 'react';
import styles from './Comp1.module.css';
import Card from './cards/Card';

function Comp1() {
  return (
    <div className={styles.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default Comp1;