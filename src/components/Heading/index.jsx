
import "./index.css";

export function Heading(props){
    const {level,children} = props;
    const  className = `my-heading`
    const heading  = {
        h1 : <h1 className = {className}>{children}</h1>,
        h2 : <h2 className = {className}>{children}</h2>,
        h3 : <h3 className = {className}>{children}</h3>,
        h4 : <h4 className = {className}>{children}</h4>,
        h5 : <h5 className = {className}>{children}</h5>,
        h6 : <h6 className = {className}>{children}</h6>
    }
    return heading[level]
}
