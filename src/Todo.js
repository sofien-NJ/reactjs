import React from 'react'
 
export default function Todo({ todo, toggleTodo }){
    function HandletodoClick(){
        toggleTodo(todo.id)
    }
    return(
        <div>
           <label>
               <input type="checkbox" checked={todo.complete} onChange={HandletodoClick} />
           {todo.name}
           </label> 
           
        </div>
    )
}