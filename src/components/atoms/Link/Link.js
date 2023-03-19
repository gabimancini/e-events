import classnames from "classnames";
import './Link.css';
const Link = ({href, text, className}) => {
    const linkClassName = classnames('button',{
        avatar: className === 'avatar',
        black: className === 'black',
        ghost: className === 'ghost',
        link: className === 'link',
        subItem: className === 'subItem'
    })
    return(
    <a href={href} className={linkClassName}>{text}</a>
    )
}
export default Link;