import React, { useState } from 'react'
import styles from './militaryCard.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';
const Military = () => {
    const [change,setChange] = useState(false)
  return (
 <div className= {styles.wrapper}>
    <div style={{ width:'100%', height:'100%'}}>
    {change? ( <div className={styles.Military_true}>
           <div className={styles.MilitaryHeader}>
            <div className= {styles.header_left}>
                <img onClick={() => setChange(false)} src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Воинский учет</h4>
            </div>
            <div className={styles.headerRight}>
            </div>
           </div>
           <ul className={styles.Military_desc}>
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Годность к военной службе</h3>
            <p className={styles.Military_info}>Годен</p>
           </li>

           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Военкомат по месту жительства</h3>
            <p className={styles.Military_info}>Чуйская область</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Состав</h3>
            <p className={styles.Military_info}>-</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>ВУС</h3>
            <p className={styles.Military_info}>-</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Воинское звание</h3>
            <p className={styles.Military_info}>Лейтинант</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Род войск</h3>
            <p className={styles.Military_info}>Наземные</p>
           </li>
            
           </ul>


            <div className={styles.Military_change_block}>

            <ul className={styles.Military_desc}>
            
            <li className= {styles.Military_list}>
             <h3 className={styles.Military_title}>Годность к военной службе</h3>
             <input type="text" className={styles.Military_info_change_inp} />
            </li>
 
            <li className= {styles.Military_list}>
             <h3 className={styles.Military_title}>Военкомат по месту жительства</h3>
             <input type="text" className={styles.Military_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Military_list}>
             <h3 className={styles.Military_title}>Состав</h3>
             <input type="text" className={styles.Military_info_change_inp} />
            
            </li>
             
             
            <li className= {styles.Military_list}>
             <h3 className={styles.Military_title}>ВУС</h3>
             <input type="text" className={styles.Military_info_change_inp} />
            
            </li>
             
             
            <li className= {styles.Military_list}>
             <h3 className={styles.Military_title}>Воинское звание</h3>
             <input type="text" className={styles.Military_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Military_list}>
             <h3 className={styles.Military_title}>Род войск</h3>
             <input type="text" className={styles.Military_info_change_inp} />
             
            </li>
             
            </ul>
                <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'20px'}}>Сохранить Изменения</p></button>
                </div>
            </div>

        </div>) : ( <div className={styles.Military}>
           <div className={styles.MilitaryHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Воинский учет</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>
           <ul className={styles.Military_desc}>
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Годность к военной службе</h3>
            <p className={styles.Military_info}>Годен</p>
           </li>

           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Военкомат по месту жительства</h3>
            <p className={styles.Military_info}>Чуйская область</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Состав</h3>
            <p className={styles.Military_info}>-</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>ВУС</h3>
            <p className={styles.Military_info}>-</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Воинское звание</h3>
            <p className={styles.Military_info}>Лейтинант</p>
           </li>
            
            
           <li className= {styles.Military_list}>
            <h3 className={styles.Military_title}>Род войск</h3>
            <p className={styles.Military_info}>Наземные</p>
           </li>
            
           </ul>
           </div>
           )}
       
    </div>
 </div>
  )
}

export default Military