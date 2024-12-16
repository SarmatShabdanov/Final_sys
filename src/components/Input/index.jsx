
import "./index.css";

export function Input(props){
    const {danger,label,type,placeholder,value,onChange} = props;
    const  className = `my-input my-input--${danger} `
    
    return <div>  <label>{label} </label> <input onChange = {onChange} type = {type}  placeholder={placeholder}  value = {value} className={className}></input> </div>
   
}
