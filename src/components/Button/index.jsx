
import "./index.css";

export function Button(props){
    const {size,variant,children,type,onClick,disabled} = props;
    const  className = `my-button my-button--${variant} my-button--${size} my-button--${type} my-button--${onClick} `
    return <button  onClick={onClick} type = {type} className={className}>{children}</button>
}
