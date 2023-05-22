import styles from "./Input.module.css"
import {Field} from "formik";

interface InputProps {
    name: string;
    type?: string;
    error?: any;
    placeholder?: string;
    onChange?: (e:any) => void;
    style?: any;
}

const Input: React.FC<InputProps> = ({
                                         name, type, error, placeholder, onChange, style
                                     }) => {
    return (
        <div>
            <Field
                name={name}
                type={type}
                error={error}
                placeholder={placeholder}
                onChange={onChange}
                style={style}
                className={styles.inp}
            />
            <p className={styles.error}>{error}</p>
        </div>
    );
};

export default Input;