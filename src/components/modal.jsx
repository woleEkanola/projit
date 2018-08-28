import React from 'react';


const Modal = props =>{
    if(props.modalEdit){
        return(
            <div className= 'Modal' > 
                    <input type='text' value={props.card.title} />
                    <input type='textArea' value={props.card.content} />
                    
                   
            
                      <p onClick={props.onClick}>x</p>
                      </div>
                ) 

    }
    return(
<div className= 'Modal' > 
        <p>{props.card.title}</p>
          <p>{props.card.content}</p>

          <p onClick={props.onClick}>x</p>
          </div>
    ) 
}

export default  Modal