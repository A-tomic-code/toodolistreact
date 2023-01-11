import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";


interface ListProps {
    items: any[],
    removeTask: Function,
    markAsCompleted: Function
} 

export const List = (props:ListProps) => {

    let returnValue;

    if(props.items.length > 0){
      returnValue = 
        <ul>
            {
                props.items.map((item, key) => {

                    return (
                        <li key={key} className={item.completed ? 'completed' : 'pending'}>
                            {item.task}
    
                            <div className="actions">
                                
                                <span className={item.completed ? 'hide' : 'done'}
                                    onClick={() => props.markAsCompleted(item.id)}>
                                    
                                    <p><FiCheckCircle/></p>
    
                                </span>
    
                                <span className="trash" onClick={() => props.removeTask(item.id)}>
    
                                    <p><FiTrash2/></p>
    
                                </span>
                            </div>
    
                        </li>
                    )
                })
            }

        </ul>  
    } else {
        returnValue = <ul>
            <li>No tienes nunguna tarea, crea una escribiendo en el campo de arriba</li>
        </ul>
    }

    

        

    return returnValue
}