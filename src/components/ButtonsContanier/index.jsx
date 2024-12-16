
import "./index.css"
export function ButtonsContanier(props){
    const {content,direction,children} = props;
    const  className = `my-buttons-contanier my-buttons-contanier--${content} my-buttons-contanier--${direction}`
    return <div className={className}>{children}</div>
}
