import React from 'react';
import "./App.css"


function List(props) {

   
    return (
        <>
            <div className="listitem">
                <i className="fas fa-times-circle" onClick={()=>{
                    props.onselect(props.id)
                }}></i>
                <li>{props.text}</li>;
            </div>
        </>
    )
}

export default List