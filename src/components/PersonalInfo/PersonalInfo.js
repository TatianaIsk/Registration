import style from './PersonalInfo.module.css'

const PersonalInfo = (props) => {
    return (
        <div className={style.page}>
            <div className={style.block}>
                <p className={style.text}>Номер телефона</p>
                <input placeholder={props.newPhone} className={style.inp}/>
            </div>
            <div className={style.block}>
                <p className={style.text}>Электронная почта</p>
                <input placeholder={props.newMail} className={style.inp}/>
            </div>
            <div className={style.block}>
                <p className={style.text}>Я согласен</p>
                <input className={style.checkBox} type="checkbox"/>
                <p className={style.info}>принимать актуальную информацию на email</p>
            </div>
            <button className={style.btn}>Изменить</button>
        </div>
    )
}

export default PersonalInfo