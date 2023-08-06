import React from 'react'
import './SuccessCard.module.css'
import styles from './SuccessCard.module.css';


const SuccessfulCard = () => {
  return (
    <div className={styles.greencard}>
      <p>
        " An email has been sent to you, click on the link to activate your
        account"
      </p>
    </div>
  );
}

export default SuccessfulCard
