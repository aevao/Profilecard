import React, { useState } from 'react'
import styles from './Vacation.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';
const Vacation = () => {
    const [change,setChange] = useState(false)
  return (
 <div className= {styles.wrapper}>
    <div style={{ width:'100%', height:'100%'}}>
    {change? ( <div className={styles.Vacation_true}>
           <div className={styles.VacationHeader}>
            <div className= {styles.header_left}>
                <img onClick={() => setChange(false)} src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Отпуск</h4>
            </div>
            <div className={styles.headerRight}>
            </div>
           </div>
           


            <div className={styles.Vacation_change_block}>

            <div className={styles.Vacation_change_header}>
             <input type="text" placeholder='Вид отпуска' className={styles.Vacation_info_Header_inp} />
             {/* <button className={styles.change_btn_add}><p  style={{color: 'white', fontSize:'20px'}}>Добавить еще</p></button> */}
            </div>

            <ul className={styles.Vacation_desc}>
            
            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>За какой период</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
            </li>
 
            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Конец</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Начало отпуска</h3>
             <input type="date" className={styles.Vacation_info_change_inp} />
            
            </li>
             
             
            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Конец</h3>
             <input type="date" className={styles.Vacation_info_change_inp} />
            
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Количество дней</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
             
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Приказ</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
             
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Дата</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Не использованные дни</h3>
             <input type="date" className={styles.Vacation_info_change_inp} />
             
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Отозвать с отпуска</h3>
             <input type="date" className={styles.Vacation_info_change_inp} />
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Не оплаченные дни</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Приказ</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
            </li>

            <li className= {styles.Vacation_list_true}>
             <h3 className={styles.Vacation_title}>Дата</h3>
             <input type="text" className={styles.Vacation_info_change_inp} />
            </li>

        
             
             
            
             
            </ul>
                <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'20px'}}>Сохранить Изменения</p></button>
                </div>
            </div>

        </div>) : ( <div className={styles.Vacation}>
           <div className={styles.VacationHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Отпуск</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>

           <p style={{color:'white', fontSize: '24px', width: '80%', textAlign:'left',margin: 'auto',  marginLeft: '8%',marginTop:'15px'}}>Основной оплачиваемый ежегодный трудовой отпуск </p>
           <ul className={styles.Vacation_desc}>
            
           <li className= {styles.Vacation_list}>
            <p className={styles.Vacation_title}>Номер приказа</p>
            <p className={styles.Vacation_info}>7885122</p>
           </li>

           <li className= {styles.Vacation_list}>
            <p className={styles.Vacation_title}>Начало</p>
            <p className={styles.Vacation_info}>13,07,2023</p>
           </li>
            
            
           <li className= {styles.Vacation_list}>
            <p className={styles.Vacation_title}>Конец</p>
            <p className={styles.Vacation_info}>25,07,2023</p>
           </li>
            
            
           <li className= {styles.Vacation_list}>
            <p className={styles.Vacation_title}>Количество дней</p>
            <p className={styles.Vacation_info}>12</p>
           </li>
            
            
           <li className= {styles.Vacation_list}>
            <p className={styles.Vacation_title}>Отозвать с отпуска</p>
            <p className={styles.Vacation_info}>25,07,2005</p>
           </li>
            
            
           <li className= {styles.Vacation_list}>
            <p className={styles.Vacation_title}>Дата</p>
            <p className={styles.Vacation_info}>20,06,2023</p>
           </li>
            
           </ul>
           </div>
           )}
       
    </div>
 </div>
  )
}

export default Vacation