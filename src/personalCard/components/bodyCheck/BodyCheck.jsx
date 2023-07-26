import React, { useState } from 'react'
import styles from './bodyCheck.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';

const BodyCheck = () => {
    const [change,setChange] = useState(false)
    
  return (
    <div>
        {change? (<div className={styles.BodyCheck}>
           <div className={styles.BodyCheckHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Медосмотр</h4>
            </div>
            <div className={styles.headerRight}>
               
            </div>
           </div>
           <ul className={styles.BodyCheck_desc}>
            
            <li className= {styles.BodyCheck_list}>
             <h3 className={styles.BodyCheck_title}>Дата прохождения</h3>
             <input type="text" className={styles.BodyCheck_info_change_inp} />
            </li>
 
            <li className= {styles.BodyCheck_list}>
             <h3 className={styles.BodyCheck_title}>Дата</h3>
             <input type="text" className={styles.BodyCheck_info_change_inp} />
            </li>

            <li className= {styles.BodyCheck_list}>
             <h3 className={styles.BodyCheck_title}>Файл</h3>
             <input type="file" className={styles.BodyCheck_info_change_inp} />
            </li>
           
            </ul>
            <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'17px'}}>Сохранить Изменения</p></button>
                </div>
           </div>) 

           : 

           (<div className={styles.BodyCheck}>
           <div className={styles.BodyCheckHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Медосмотр</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>
           <ul className={styles.BodyCheck_desc}>
            
            <li className= {styles.BodyCheck_list}>
             <h3 className={styles.BodyCheck_title}>Дата  </h3>
             <p className={styles.BodyCheck_info}>20,05,2023</p>
            </li>
 
            <li className= {styles.BodyCheck_list}>
             <h3 className={styles.BodyCheck_title}>Место прохождения</h3>
             <p className={styles.BodyCheck_info}>Железнодорожная поликлиника</p>
            </li>

            <button className={styles.change_btn_download}><p  style={{color: 'white', fontSize:'17px'}}>Скачать документ</p></button>
            
            </ul>
           </div>)}
        
    </div>
  )
}

export default BodyCheck