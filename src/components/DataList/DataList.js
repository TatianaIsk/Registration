import styles from "./DataList.module.css"
import {Field} from "formik";

interface SelectProps {
    name: string;
    error?: any;
    id?: string;
    placeholder?: string;
    onChange?: (e:any) => void;
    style?: any;
    defaultValue?: any;
    value?: any;
}

const DataList: React.FC<SelectProps> = ({
                                         name, error, id, placeholder, onChange, style, defaultValue, value
                                     }) => {
    return (
        <div>
            <Field
                name={name}
                error={error}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                style={style}
                className={error ? styles.inpError : styles.inp}
                defaultValue={defaultValue}
                list={`list_${name}`}
                value={value}
            />
            <p className={styles.error}>{error}</p>

            <datalist id={`list_${name}`}>
                {defaultValue &&
                    defaultValue.map((item: any) => (
                        <option key={Math.floor(Math.random() * (100000000 - 1 + 1)) + 2}>
                            {item}
                        </option>
                    ))}
            </datalist>
        </div>
    );
};

export default DataList;