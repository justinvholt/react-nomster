import React from 'react';
import styles from './SearchResult.module.css'
import { BusinessRating } from '../../../BusinessRating/BusinessRating';

export function SearchResult() {
  return (
    <div className={styles['search-result']}>
      <img src='https://via.placeholder.com/210' alt='business'  className={styles['business-image']}/>

      <div className={styles['business-info']}>
        <h2 className='subtitle'>Burger Place</h2>

        <BusinessRating/>

        <p>$$$
           <span className='tag'>Burgers Fast Food</span>
           <span className='tag'>Fast Food</span>       
        </p>
      </div>
      
      <div className={styles['contact-info']}>
        <p className={styles.phone}>+13125552222</p>
        <p>122 Example Street</p>
        <p>12345</p>
        <p>Chicago</p>
      </div>
    </div>
  );
}