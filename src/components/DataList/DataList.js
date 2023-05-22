import styles from "./DataList.module.css"
import {Field} from "formik";

interface SelectProps {
    name: string;
    error?: any;
    placeholder?: string;
    onChange?: (e:any) => void;
    style?: any;
    defaultValue?: any;
}

const DataList: React.FC<SelectProps> = ({
                                         name, error, placeholder, onChange, style, defaultValue
                                     }) => {
    return (
        <div>
            <Field
                name={name}
                error={error}
                placeholder={placeholder}
                onChange={onChange}
                style={style}
                className={styles.inp}
                defaultValue={defaultValue}
                list={`list_${name}`}
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