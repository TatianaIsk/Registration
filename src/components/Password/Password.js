import style from './Password.module.css'
import {useState} from "react";


const Password = (props) => {
    return (
        <div className={style.page}>
            <div className={style.block}>
                <p className={style.text}>Пароль</p>
                <input placeholder={props.newPassword}
                       className={style.inp}/>
            </div>

            <div className={style.block}>
                <p className={style.text}>Пароль еще раз
                    <span className={style.textActive}>*</span>
                </p>
                <input placeholder={props.repeatPassword}
                       className={style.inp}
                />
            </div>

        </div>
    )
}

export default Password