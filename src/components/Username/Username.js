import s from './Username.module.css'

const Username = (props) => {

    return (
        <div className={s.page}>
            <h2 className={s.title}>Здравствуйте, <span className={s.name}>{props.name}</span></h2>
        </div>
    )
}

export default Username
