import React, { useState } from 'react'
import styles from './familyStatus.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';
const FamilyStatus = () => {
    const [change,setChange] = useState(false)
  return (
 <div className= {styles.wrapper}>
    <div style={{ width:'100%', height:'100%'}}>
    {change? ( <div className={styles.Family_true}>
           <div className={styles.FamilyHeader}>
            <div className= {styles.header_left}>
                <img onClick={() => setChange(false)} src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Семейное положение</h4>
            </div>
            <div className={styles.headerRight}>
            </div>
           </div>
           <p style={{color:'white', fontSize: '24px', width: '80%', textAlign:'left',margin: 'auto',  marginLeft:' 8%', marginTop: '50px', marginBottom: '50px', fontFamily: '"Inter", sans-serif'}}>Холост</p>
           <h2 style={{color:'white', fontSize: '24px', width: '80%', textAlign:'left',margin: 'auto',  marginLeft: '8%',}}>Сведение о родественниках </h2>
           <ul className={styles.Family_desc}>
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Имя</p>
            <p className={styles.Family_info}>Никита</p>
           </li>

           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Фамилия</p>
            <p className={styles.Family_info}>Махкамов</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Отчество</p>
            <p className={styles.Family_info}>Андреевич</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>ВУС</p>
            <p className={styles.Family_info}>-</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Степень родства</p>
            <p className={styles.Family_info}>Брат</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Дата рождения</p>
            <p className={styles.Family_info}>25,07,2005</p>
           </li>
            
           </ul>


            <div className={styles.Family_change_block}>

            <div className={styles.Family_change_header}>
             <input type="text" placeholder='Семейное положение на момент заполнения' className={styles.Family_info_Header_inp} />
             <button className={styles.change_btn_add}><p  style={{color: 'white', fontSize:'20px'}}>Добавить еще</p></button>
            </div>

            <ul className={styles.Family_desc}>
            
            <li className= {styles.Family_list}>
             <h3 className={styles.Family_title}>Имя</h3>
             <input type="text" className={styles.Family_info_change_inp} />
            </li>
 
            <li className= {styles.Family_list}>
             <h3 className={styles.Family_title}>Фамилия</h3>
             <input type="text" className={styles.Family_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Family_list}>
             <h3 className={styles.Family_title}>Отчество</h3>
             <input type="text" className={styles.Family_info_change_inp} />
            
            </li>
             
             
            <li className= {styles.Family_list}>
             <h3 className={styles.Family_title}>Дата рождения</h3>
             <input type="date" className={styles.Family_info_change_inp} />
            
            </li>
             
             
            
             
            </ul>
                <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'20px'}}>Сохранить Изменения</p></button>
                </div>
            </div>

        </div>) : ( <div className={styles.Family}>
           <div className={styles.FamilyHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Семейное положение</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>

           <p style={{color:'white', fontSize: '24px', width: '80%', textAlign:'left',margin: 'auto',  marginLeft:' 8%', marginTop: '50px', marginBottom: '50px', fontFamily: '"Inter", sans-serif'}}>Холост</p>
           <h2 style={{color:'white', fontSize: '24px', width: '80%', textAlign:'left',margin: 'auto',  marginLeft: '8%',}}>Сведение о родественниках </h2>
           <ul className={styles.Family_desc}>
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Имя</p>
            <p className={styles.Family_info}>Никита</p>
           </li>

           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Фамилия</p>
            <p className={styles.Family_info}>Махкамов</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Отчество</p>
            <p className={styles.Family_info}>Андреевич</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>ВУС</p>
            <p className={styles.Family_info}>-</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Степень родства</p>
            <p className={styles.Family_info}>Брат</p>
           </li>
            
            
           <li className= {styles.Family_list}>
            <p className={styles.Family_title}>Дата рождения</p>
            <p className={styles.Family_info}>25,07,2005</p>
           </li>
            
           </ul>
           </div>
           )}
       
    </div>
 </div>
  )
}

export default FamilyStatus