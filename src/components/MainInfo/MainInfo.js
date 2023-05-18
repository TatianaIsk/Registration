import React from 'react'
import style from './MainInfo.module.css'
import cities from './../../json/cities.json'

const MainInfo = (props) => {

    let newNameElement = React.createRef()

    let newNameUpdate = () => {
        let text = newNameElement.current.value
        props.updateNewName(text)
    }

    return (
        <div className={style.page}>
            <div className={style.block}>
                <p className={style.text}>Имя
                    <span className={style.textActive}>*</span>
                </p>
                <input placeholder={props.newNameText}
                       className={style.inp}
                       ref={newNameElement}
                       onChange={newNameUpdate}/>
            </div>
            <div className={style.block}>
                <p className={style.text}>Фамилия
                    <span className={style.textActive}>*</span>
                </p>
                <input placeholder={props.newMiddleNameText} className={style.inp}/>
            </div>
            <div className={style.block}>
                <p className={style.text}>Ваш город
                    <span className={style.textActive}>*</span>
                </p>
                <select className={style.select} >
                    <option></option>
                </select>
            </div>
        </div>
    )
}

export default MainInfo