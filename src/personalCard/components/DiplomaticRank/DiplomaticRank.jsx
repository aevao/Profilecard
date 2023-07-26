import React, { useState } from 'react'
import styles from './diplomaticRank.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';

const DiplomaticRank = () => {
    const [change,setChange] = useState(false)
    
  return (
    <div>
        {change? (<div className={styles.Diplomatic}>
           <div className={styles.DiplomaticHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Дипломатический ранг или иные звания  </h4>
            </div>
           
           </div>
           <ul className={styles.Diplomatic_desc}>
            
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Название  </h3>
             <p className={styles.Diplomatic_info}>Дипломат</p>
            </li>
 
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Звание</h3>
             <p className={styles.Diplomatic_info}>Посол Кр</p>
            </li>

            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Дата:</h3>
             <p className={styles.Diplomatic_info}>12 августа 2019 г.</p>
            </li>

            
            <button className={styles.change_btn_add}><p style={{color: 'white', fontSize:'17px'}}>Добавить еще</p></button>
            </ul>

            <div className={styles.Diplomatic_change_block}>

            

            <ul className={styles.Diplomatic_desc}>
            
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Название</h3>
             <input type="text" className={styles.Diplomatic_info_change_inp} />
            </li>
 
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Звание</h3>
             <input type="text" className={styles.Diplomatic_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Дата</h3>
             <input type="date" className={styles.Diplomatic_info_change_inp} />
            
            </li>
             
             
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Файл</h3>
             <input type="file" className={styles.Diplomatic_info_change_inp} />
            
            </li>
             
             
            
             
            </ul>
                <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'20px'}}>Сохранить Изменения</p></button>
                </div>
            </div>
           </div>) 

           : 

           (<div className={styles.Diplomatic}>
           <div className={styles.DiplomaticHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Дипломатический ранг или иные звания  </h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>
           <ul className={styles.Diplomatic_desc}>
            
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Название  </h3>
             <p className={styles.Diplomatic_info}>Дипломат</p>
            </li>
 
            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Звание</h3>
             <p className={styles.Diplomatic_info}>Посол Кр</p>
            </li>

            <li className= {styles.Diplomatic_list}>
             <h3 className={styles.Diplomatic_title}>Дата:</h3>
             <p className={styles.Diplomatic_info}>12 августа 2019 г.</p>
            </li>

            <button className={styles.change_btn_download}><p  style={{color: 'white', fontSize:'17px'}}>Скачать документ</p></button>
            
            </ul>
           </div>)}
        
    </div>
  )
}

export default DiplomaticRank