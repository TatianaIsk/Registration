import style from "./WrapperInput.module.css"

interface WrapperInputProps {
    children: any;
    leftText?: string;
    requiredInput?: string;
}

const WrapperInput: React.FC<WrapperInputProps> = ({children, leftText, requiredInput}) => {
    return (
        <div className={style.block}>
            <label className={style.text}>{leftText}
                <span className={style.textActive}>{requiredInput}</span>
            </label>
            {children}
        </div>
    );
};

export default WrapperInput;