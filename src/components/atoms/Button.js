const Button = ({text, onClick, className}) => {
    const style={
        width: "100%"
    }
    return(
        <button className={className} onClick={onClick} style={style}>{text}</button>
    )
}
export default Button;