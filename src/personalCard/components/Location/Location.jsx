import React, { useState } from 'react'
import styles from './Location.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';
const Location = () => {
    const [change,setChange] = useState(false)
  return (
 <div className= {styles.wrapper}>
    <div style={{ width:'100%', height:'100%'}}>
    {change? ( <div className={styles.Location_true}>
           <div className={styles.LocationHeader}>
            <div className= {styles.header_left}>
                <img onClick={() => setChange(false)} src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Место жительства</h4>
            </div>
            <div className={styles.headerRight}>
            </div>
           </div>
           
           <ul className={styles.Location_desc}>
            
            <li className= {styles.Location_list}>
             <p className={styles.Location_title}>Страна:</p>
             <p className={styles.Location_info}>Кыргызстан</p>
            </li>
 
            <li className= {styles.Location_list}>
             <p className={styles.Location_title}>Область:</p>
             <p className={styles.Location_info}>Чуйская область</p>
            </li>
             
             
            <li className= {styles.Location_list}>
             <p className={styles.Location_title}>Районы областей:</p>
             <p className={styles.Location_info}>-</p>
            </li>
             
             
            <li className= {styles.Location_list}>
             <p className={styles.Location_title}>Город:</p>
             <p className={styles.Location_info}>Бишкек</p>
            </li>
             
             
            <li className= {styles.Location_list}>
             <p className={styles.Location_title}>Село:</p>
             <p className={styles.Location_info}>-</p>
            </li>
             
             
            <li className= {styles.Location_list}>
             <p className={styles.Location_title}>Районы города:</p>
             <p className={styles.Location_info}>-</p>
            </li>
 
            <li className= {styles.Location_list}>
             <p className={styles.Location_title}>Улица:</p>
             <p className={styles.Location_info}>Советская</p>
            </li>
             
            </ul>

            <div className={styles.Location_change_block}>

           

            <ul className={styles.Location_desc_true}>
            
            <li className= {styles.Location_list_true}>
             <h3 className={styles.Location_title}>Страна</h3>
             <input type="text" className={styles.Location_info_change_inp} />
            </li>
 
            <li className= {styles.Location_list_true}>
             <h3 className={styles.Location_title}>Область</h3>
             <input type="text" className={styles.Location_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Location_list_true}>
             <h3 className={styles.Location_title}>Районы областей</h3>
             <input type="text" className={styles.Location_info_change_inp} />
            
            </li>
             
             
            <li className= {styles.Location_list_true}>
             <h3 className={styles.Location_title}>Город</h3>
             <input type="text" className={styles.Location_info_change_inp} />
            
            </li>

            <li className= {styles.Location_list_true}>
             <h3 className={styles.Location_title}>Село</h3>
             <input type="text" className={styles.Location_info_change_inp} />
             
            </li>

            <li className= {styles.Location_list_true}>
             <h3 className={styles.Location_title}>Районы города</h3>
             <input type="text" className={styles.Location_info_change_inp} />
             
            </li>

            <li className= {styles.Location_list_true}>
             <h3 className={styles.Location_title}>Улица</h3>
             <input type="text" className={styles.Location_info_change_inp} />
            </li>

    
             
            </ul>
                <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'20px'}}>Сохранить Изменения</p></button>
                </div>
            </div>

        </div>) : ( <div className={styles.Location}>
           <div className={styles.LocationHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Место жительства</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>

           <ul className={styles.Location_desc}>
            
           <li className= {styles.Location_list}>
            <p className={styles.Location_title}>Страна:</p>
            <p className={styles.Location_info}>Кыргызстан</p>
           </li>

           <li className= {styles.Location_list}>
            <p className={styles.Location_title}>Область:</p>
            <p className={styles.Location_info}>Чуйская область</p>
           </li>
            
            
           <li className= {styles.Location_list}>
            <p className={styles.Location_title}>Районы областей:</p>
            <p className={styles.Location_info}>-</p>
           </li>
            
            
           <li className= {styles.Location_list}>
            <p className={styles.Location_title}>Город:</p>
            <p className={styles.Location_info}>Бишкек</p>
           </li>
            
            
           <li className= {styles.Location_list}>
            <p className={styles.Location_title}>Село:</p>
            <p className={styles.Location_info}>-</p>
           </li>
            
            
           <li className= {styles.Location_list}>
            <p className={styles.Location_title}>Районы города:</p>
            <p className={styles.Location_info}>-</p>
           </li>

           <li className= {styles.Location_list}>
            <p className={styles.Location_title}>Улица:</p>
            <p className={styles.Location_info}>Советская</p>
           </li>
            
           </ul>
           </div>
           )}
       
    </div>
 </div>
  )
}

export default Location