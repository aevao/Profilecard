import React, { useState } from 'react'
import styles from './Education.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';
const Education = () => {
    const [change,setChange] = useState(false)
    const [add, setAdd] = useState(false)
  return (
 <div className= {styles.wrapper}>
    <div style={{ width:'100%', height:'100%'}}>
    {change? ( <div className={styles.Education_true}>
           <div className={styles.EducationHeader}>
            <div className= {styles.header_left}>
                <img onClick={() => setChange(false)} src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Образование</h4>
            </div>
            <div className={styles.headerRight}>
            </div>
           </div>

            <div className={styles.Education_change_block}>

            <ul className={styles.Education_desc}>
            
            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Образование</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>
 
            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Учебное заведение</h3>
             <input type="text" className={styles.Education_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Факультет/отделение</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            
            </li>
             
             
            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Вид обучения</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Год вступления</h3>
             <input type="text" className={styles.Education_info_change_inp} />
             
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Год окончания/ухода</h3>
             <input type="text" className={styles.Education_info_change_inp} />
             
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title} placeholder='Курс ухода'>Если не окончил </h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Специальность по окончанию</h3>
             <input type="text" className={styles.Education_info_change_inp} />
             
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Номер диплома</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Ученая степень</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Ученое звание</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Знание Гос.языка</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Знание языков</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Уровень знания</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>
           
            <button onClick={() => setAdd(true)} className={styles.change_btn_add}><p  style={{color: 'white', fontSize:'20px'}}>Добавить еще</p></button>

            </ul>
            {add? (
            <ul className={styles.Education_desc_foot}>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Знание языков</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>

            <li className= {styles.Education_list_true}>
             <h3 className={styles.Education_title}>Уровень знания</h3>
             <input type="text" className={styles.Education_info_change_inp} />
            </li>
            <button className={styles.Education_btn} onClick={() => setAdd(false)}>x</button >
            </ul>) : (null)}
                <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'20px'}}>Сохранить Изменения</p></button>
                </div>
            </div>

        </div>) : ( <div className={styles.Education}>
           <div className={styles.EducationHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Образование</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>

           <p style={{color:'white', fontSize: '24px', width: '80%', textAlign:'left',margin: 'auto',  marginLeft: '8%',marginTop:'15px'}}>Высшее</p>
           <ul className={styles.Education_desc}>
            
           <li className= {styles.Education_list}>
            <p className={styles.Education_title}>Учебное заведение</p>
            <p className={styles.Education_info}>КГТУ</p>
           </li>

           <li className= {styles.Education_list}>
            <p className={styles.Education_title}>Факультет</p>
            <p className={styles.Education_info}>Программная инженерия</p>
           </li>
            
            
           <li className= {styles.Education_list}>
            <p className={styles.Education_title}>Специальность</p>
            <p className={styles.Education_info}>Программный инженер</p>
           </li>
            
            
           <li className= {styles.Education_list}>
            <p className={styles.Education_title}>Начало обучения</p>
            <p className={styles.Education_info}>01,09,2018</p>
           </li>
            
            
           <li className= {styles.Education_list}>
            <p className={styles.Education_title}>Конец обученияа</p>
            <p className={styles.Education_info}>20,06,2022</p>
           </li>
            
           </ul>
           </div>
           )}
       
    </div>
 </div>
  )
}

export default Education