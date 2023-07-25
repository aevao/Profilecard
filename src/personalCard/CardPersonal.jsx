import React, { useState } from 'react'
import styles from './personalCard.module.scss'
import phooto from '../asset/personalPhoto.png'
const CardPersonal = () => {
    const [main,setMain] = useState(true)
  return (

    <div className={styles.wrapper}>
         <div style={{ width:'100%', height:'100%'}}>
        {main? (<div className={styles.Personal} >
            <h2 className={styles.Personal_Card}>Личная Карточка</h2>
            <div className={styles.Personal_info}>
                <img src= {phooto} alt="" className={styles.Personal_photo} />
                <h3 className={styles.Personal_name}>Махкамов Марк</h3>
            </div>
            <div className={styles.Person_block}>
                <ul className={styles.block_desc}>
                    <li onClick={() => {setMain(false);}} className={styles.block_list}>Воинский учет</li>
                    <li className={styles.block_list}>Дипломатический ранг</li>
                    <li className={styles.block_list}>Медосмотр</li>
                    <li className={styles.block_list}>Место жительства</li>
                   
                </ul>
                <ul className={styles.block_desc}>
                    <li className={styles.block_list}>Награды</li>
                    <li className={styles.block_list}>Образование</li>
                    <li className={styles.block_list}>Отпуск</li>
                    <li className={styles.block_list}>Прибывание за границей</li>
                </ul>
                <ul className={styles.block_desc}>
                    <li className={styles.block_list}>Семейное положение</li>
                    <li className={styles.block_list}>Трудовая деятельность</li>
                    <li className={styles.block_list}>Ученная степень/Звание</li>
                    <li className={styles.block_list}>Штатное расписание</li>
                </ul>
            </div>
        </div>) : (null)}


        



    </div>
    </div>
  )
}

export default CardPersonal