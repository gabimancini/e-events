import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input/Input";

const InputIcon = ({className,onClick, onChange, src,alt, type}) => {
    return (
        <div style={{ position: "relative" }}>
            <Input type={type} className={className} onChange={onChange} />
            <Icon src={src} alt={alt} className="iconInBnt" onClick={onClick} />
        </div>
    )
}
export default InputIcon;