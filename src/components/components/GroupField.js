import Input from '../atoms/Input';
import Label from '../atoms/Label';
const GroupField = ({name, children, type, id, handleChange}) => {
    return(
        <div className='group-field'>
        <Label htmlFor={name} children={children}/>
        <Input type={type} id={id} onChange={handleChange} />
        </div>
    )
}
export default GroupField;