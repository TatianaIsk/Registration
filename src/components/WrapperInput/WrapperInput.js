import style from "./WrapperInput.module.css"

interface WrapperInputProps {
    children: any;
    leftText?: string;
    requiredInput?: string;
    htmlFor?: any;
}

const WrapperInput: React.FC<WrapperInputProps> = ({children, leftText, requiredInput, htmlFor}) => {
    return (
        <div className={style.block}>
            <label className={style.text} htmlFor={htmlFor}>{leftText}
                <span className={style.textActive}>{requiredInput}</span>
            </label>
            {children}
        </div>
    );
};

export default WrapperInput;