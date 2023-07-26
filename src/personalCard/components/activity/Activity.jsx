import React, { useState } from 'react'
import styles from './activity.module.scss'
import back from "../../asset/_--.png";
import { style } from '@mui/system';
import { Input } from '@mui/material';
const Activity = () => {
    const [change,setChange] = useState(false)
  return (
 <div className= {styles.wrapper}>
    <div style={{ width:'100%', height:'100%'}}>
    {change? ( <div className={styles.Activity_true}>
           <div className={styles.ActivityHeader}>
            <div className= {styles.header_left}>
                <img onClick={() => setChange(false)} src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Трудовая деятельность/Стаж работы     </h4>
            </div>
            <div className={styles.headerRight}>
            </div>
           </div>
           


            <div className={styles.Activity_change_block}>

            

            <ul className={styles.Activity_desc}>
            
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>По специальности</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            </li>
 
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Общий</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
             
            </li>
             
             
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>На гос.службе</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
             
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Частная структура</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>

            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Непрерывный</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
           

            
            </ul>
           <h3 className={styles.Activity_title_sec}>Повышение квалификации</h3>
                <ul className={styles.Activity_desc}>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Тема</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Начало</h3>
             <input type="date" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Конец</h3>
             <input type="date" className={styles.Activity_info_change_inp} />
            
            </li>

            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Вид повышения</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Вид документа</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Докумнет</h3>
             <input type="file" className={styles.Activity_info_change_inp} />
            
            </li>

             <div className={styles.change_btn}>
             <button className={styles.change_btn_add}><p  style={{color: 'white', fontSize:'20px'}}>Добавить еще</p></button>
            </div>

                </ul>

            <h3 className={styles.Activity_title_sec}>Выполняемая работа с начала трудовой деятельности</h3>
            
                <ul className={styles.Activity_desc }>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Занимаемая должность</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Штат</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
        

            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Наименование организации</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Штат</h3>
             <input type="date" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Начало работы</h3>
             <input type="date" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Окончание работы</h3>
             <input type="date" className={styles.Activity_info_change_inp} />
            
            </li>
            <li className= {styles.Activity_list_true}>
             <h3 className={styles.Activity_title}>Номер приказа</h3>
             <input type="text" className={styles.Activity_info_change_inp} />
            
            </li>
            
             <div className={styles.change_btn}>
             <button className={styles.change_btn_add}><p  style={{color: 'white', fontSize:'20px'}}>Добавить еще</p></button>
            </div>

           
                </ul>

                <div className={styles.change_btn}>
                    <button onClick={() => setChange(false)} className={styles.change_btn_Cancel}><p style={{color: 'rgba(32, 115, 219, 1)', fontSize:'20px'}}>Отмена</p></button>
                    <button className={styles.change_btn_save}><p  style={{color: 'white', fontSize:'20px'}}>Сохранить Изменения</p></button>
                </div>
            </div>

        </div>) : 
        
        ( <div className={styles.Activity}>
           <div className={styles.ActivityHeader}>
            <div className= {styles.header_left}>
                <img src={back} alt="" className={styles.header_left_img} />
                <h4 className={styles.header_left_info}>Трудовая деятельность/Стаж работы</h4>
            </div>
            <div className={styles.headerRight}>
                <a onClick={() =>setChange(true)} className={styles.headerRight_info}>Изменить</a>
            </div>
           </div>
           <ul className={styles.Activity_desc}>
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Специальность</p>
            <p className={styles.Activity_info}>Программный инженер</p>
           </li>

           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Общий</p>
            <p className={styles.Activity_info}>5 лет</p>
           </li>
            
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Гос.Служба</p>
            <p className={styles.Activity_info}>Нет</p>
           </li>
            
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Частаня структура</p>
            <p className={styles.Activity_info}>5 лет</p>
           </li>
           </ul>

           <h3 className={styles.Activity_title_sec}>Повышение Квалификации</h3>
           <ul className={styles.Activity_desc}>
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Тема</p>
            <p className={styles.Activity_info}>Повышение</p>
           </li>

           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Начало</p>
            <p className={styles.Activity_info}>13,07,2023</p>
           </li>
            
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Конец</p>
            <p className={styles.Activity_info}>25,07,2023</p>
           </li>
            
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Вид повышения</p>
            <p className={styles.Activity_info}>Обычный</p>
           </li>
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Вид документа</p>
            <p className={styles.Activity_info}>Подтверждающий</p>
           </li>

           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Документ</p>
            <button className={styles.change_btn_download}><p  style={{color: 'white', fontSize:'17px'}}>Скачать документ</p></button>
            
           </li>
           
           </ul>


           <h3 className={styles.Activity_title_sec}>Выполняемая работа с начала трудовой деятельности</h3>
           <ul className={styles.Activity_desc}>
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Занимаемая должность</p>
            <p className={styles.Activity_info}>Программный инженер</p>
           </li>

           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Штат</p>
            <p className={styles.Activity_info}>ОРПО</p>
           </li>
            
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Наименование организации</p>
            <p className={styles.Activity_info}>КГТУ</p>
           </li>
            
            
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Начало работы</p>
            <p className={styles.Activity_info}>20,05,2023</p>
           </li>
           <li className= {styles.Activity_list}>
            <p className={styles.Activity_title}>Конец работы</p>
            <p className={styles.Activity_info}>-</p>
           </li>
           
           </ul>
           </div>
           )}
       
    </div>
 </div>
  )
}

export default Activity