import React,{useState} from 'react'
import ClpsCSS from "./styles/Collapsible.module.css"


function Items(props){
    const list = [];
    for(let i =0;i<props.lessons.length;i++){
        list.push(
        <li key={props.lessons[i].id} className={ClpsCSS.lesson}>
            <span key={props.lessons[i].id}>{props.lessons[i].name}</span>
            <span key={i}>{props.lessons[i].duration}</span>
        </li>);
    }
    return list;
}



function Collapsible(props) {
    
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
            <button className={ClpsCSS.btn} onClick={toggle}>
                <span className={ClpsCSS.label}>{props.label}</span>
                <span className={ClpsCSS.totaltime}>{props.time}</span>
            </button>
          {open && (
            <ul className={ClpsCSS.toggle}>
              {<Items lessons = {props.lessons}/>}
            </ul>
          )}
        </div>
      );
}

export default Collapsible