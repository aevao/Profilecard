import React, { useState } from 'react'
import styles from './prize.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';

const Prize = () => {
    const [change,setChange] = useState(false)
    
  return (
    <div>
        {change? (<div className={styles.Prize_true}>
           <div className={styles.PrizeHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Награды  </h4>
            </div>
            <div className={styles.headerRight}>
            </div>
           </div>
           <ul className={styles.Prize_desc}>
            
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Награда:  </h3>
             <p className={styles.Prize_info}>Почетная грамота КР Почетные звания КР Медаль Орден Знак</p>
            </li>
 
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Название:</h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Дата:</h3>
             <p className={styles.Prize_info}>12 августа 2019 г.</p>
            </li>

            
            </ul>

           <ul className={styles.Prize_desc}>
            
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Награда:  </h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>
 
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Название:</h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Дата:</h3>
             <p className={styles.Prize_info}>31 августа 2019 г.</p>
            </li>

            
            </ul>

           <ul className={styles.Prize_desc}>
            
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Награда:  </h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>
 
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Название:</h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Дата:</h3>
             <p className={styles.Prize_info}>25 августа 2021 г.</p>
            </li>

            </ul>

            <button className={styles.change_btn_add}><p style={{color: 'white', fontSize:'17px'}}>Добавить еще</p></button>

        <ul className={styles.Prize_desc}>
            
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Награда</h3>
             <input type="text" className={styles.Prize_info_change_inp} />
            </li>
 
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Название</h3>
             <input type="text" className={styles.Prize_info_change_inp} />
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Дата</h3>
             <input type="date" className={styles.Prize_info_change_inp} />
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Файл</h3>
             <input type="file" className={styles.Prize_info_change_inp} />
            </li>
            <div className={styles.change_btn}>
                     <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                     <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'17px'}}>Сохранить Изменения</p></button>
                 </div>
        </ul>

           </div>
           ) 

           : 

           (<div className={styles.Prize}>
           <div className={styles.PrizeHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Награды  </h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>
           <ul className={styles.Prize_desc}>
            
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Награда:  </h3>
             <p className={styles.Prize_info}>Почетная грамота КР Почетные звания КР Медаль Орден Знак</p>
            </li>
 
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Название:</h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Дата:</h3>
             <p className={styles.Prize_info}>12 августа 2019 г.</p>
            </li>

            <button className={styles.change_btn_download}><p  style={{color: 'white', fontSize:'17px'}}>Скачать документ</p></button>
            
            </ul>

           <ul className={styles.Prize_desc}>
            
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Награда:  </h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>
 
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Название:</h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Дата:</h3>
             <p className={styles.Prize_info}>31 августа 2019 г.</p>
            </li>

            <button className={styles.change_btn_download}><p  style={{color: 'white', fontSize:'17px'}}>Скачать документ</p></button>
            
            </ul>

           <ul className={styles.Prize_desc}>
            
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Награда:  </h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>
 
            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Название:</h3>
             <p className={styles.Prize_info}>Почетная грамота КР</p>
            </li>

            <li className= {styles.Prize_list}>
             <h3 className={styles.Prize_title}>Дата:</h3>
             <p className={styles.Prize_info}>25 августа 2021 г.</p>
            </li>

            <button className={styles.change_btn_download}><p  style={{color: 'white', fontSize:'17px'}}>Скачать документ</p></button>
            
            </ul>
           </div>)}
        
    </div>
  )
}

export default Prize 