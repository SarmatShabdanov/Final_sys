
import "./index.css";

export function Tooltip(props){
    const {position,children,tooltipText} = props;
    
    const  className = `con-tooltip con-tooltip--${position}`
    
    return <div className={className}>
    {children}
    <div class="tooltip">
      <p>{tooltipText}</p>
    </div>

  </div>
}
