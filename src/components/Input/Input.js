import styles from "./Input.module.css"
import {Field} from "formik";
import style from "../Registration/Registration.module.css";

interface InputProps {
    name: string;
    type?: string;
    id?: string;
    error?: any;
    placeholder?: string;
    onChange?: (e:any) => void;
    style?: any;
    value?: any;
}

const Input: React.FC<InputProps> = ({
                                         name, type, id, error, placeholder, onChange, style, value
                                     }) => {
    return (
        <div>
            <Field
                name={name}
                type={type}
                id={id}
                error={error}
                placeholder={placeholder}
                onChange={onChange}
                style={style}
                className={error ? styles.inpError : styles.inp}
                value={value}
            />
            <p className={styles.error}>{error}</p>
        </div>
    );
};

export default Input;
