import React, { useState } from 'react'
import styles from './rank.module.scss'
import back from "../../asset/_--.png";

const Rank = () => {
    const [change,setChange] = useState(false)

  return (
    <div>
        {change? 
        
        (<div className={styles.Rank}>
           <div className={styles.RankHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Звание/Степень</h4>
            </div>
            <div className={styles.headerRight}>
                
            </div>
           </div>
           
           <ul className={styles.Rank_desc}>
            
           <li className= {styles.Rank_list}>
            <h3 className={styles.Rank_title}>Ученя степень</h3>
            <input type="text" className={styles.Rank_info_change_inp} />

           </li>

           <li className= {styles.Rank_list}>
            <h3 className={styles.Rank_title}>Ученое звание</h3>
            <input type="text" className={styles.Rank_info_change_inp} />

           </li>
           <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'17px'}}>Сохранить Изменения</p></button>
                </div>
           </ul>
        </div>) 
        
        : 
        
        (<div className={styles.Rank}>
           <div className={styles.RankHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Звание/Степень</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>
           
           <ul className={styles.Rank_desc}>
            
           <li className= {styles.Rank_list}>
            <h3 className={styles.Rank_title}>Ученя степень</h3>
            <p className={styles.Rank_info}>Магистр</p>
           </li>

           <li className= {styles.Rank_list}>
            <h3 className={styles.Rank_title}>Ученое звание</h3>
            <p className={styles.Rank_info}>Доктор всех наук</p>
           </li>
           </ul>
        </div>)}
        
    </div>
  )
}

export default Rank