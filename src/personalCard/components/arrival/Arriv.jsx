import React, { useState } from 'react'
import styles from './arrival.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';

const Arriv = () => {
    const [change,setChange] = useState(false)
    
  return (
    <div>
        {change? (<div className={styles.Arriv}>
           <div className={styles.ArrivHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Прибывание за границей</h4>
            </div>
            <div className={styles.headerRight}>
             
            </div>
           </div>
           <ul className={styles.Arriv_desc}>
            
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>Цель прибытия</h3>
             <input type="text" className={styles.Arriv_info_change_inp} />
            </li>
 
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>В какой стране</h3>
             <input type="text" className={styles.Arriv_info_change_inp} />
            </li>
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>Начало</h3>
             <input type="date" className={styles.Arriv_info_change_inp} />
            </li>
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>Конец</h3>
             <input type="date" className={styles.Arriv_info_change_inp} />
            </li>
            </ul>
            <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'17px'}}>Сохранить Изменения</p></button>
                </div>
           </div>) 

           : 

           (<div className={styles.Arriv}>
           <div className={styles.ArrivHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Прибывание за границей</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>
           <ul className={styles.Arriv_desc}>
            
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>Цель прибытия</h3>
             <p className={styles.Arriv_info}>Командировка</p>
            </li>
 
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>В какой стране</h3>
             <p className={styles.Arriv_info}>Россия</p>
            </li>
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>Начало</h3>
             <p className={styles.Arriv_info}>20,02,2023</p>
            </li>
            <li className= {styles.Arriv_list}>
             <h3 className={styles.Arriv_title}>Конец</h3>
             <p className={styles.Arriv_info}>05,03,2023</p>
            </li>
            </ul>
           </div>)}
        
    </div>
  )
}

export default Arriv