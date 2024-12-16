
import "./index.css";

export function Typography(props){
    const {textSize,children} = props;
    const  className = `my-typography my-typography--${textSize}  `
    return <p className={className}>{children}</p>
}
