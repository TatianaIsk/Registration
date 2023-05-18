import style from './Username.module.css'

const Username = (props) => {

    return (
        <div className={style.page}>
            <h2 className={style.title}>Здравствуйте, <span className={style.name}>{props.name}</span></h2>
        </div>
    )
}

export default Username