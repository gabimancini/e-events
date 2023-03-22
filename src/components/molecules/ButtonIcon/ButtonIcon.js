import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import  './buttonIcon.css';
const ButtonIcon = ({ text, alt, src, className, onClick }) => {

    return (
        <div style={{ position: "relative" }}>
            <Button text={text} className={className} onClick={onClick} />
            <Icon src={src} alt={alt} className="iconInBnt" />
        </div>
    )
}

export default ButtonIcon;