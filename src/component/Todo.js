import React,{useState, useRef} from "react";

function Todo(){

    const [todo ,SetTodo] =useState([])
    const[currentTodo,setcurrentTodo] = useState('')

    const inputval=useRef(null)

    console.log(currentTodo)
    function AddTask(){
        SetTodo([...todo,{task:currentTodo,complete:false}])
        // console.log(event.target)

        inputval.current.value=""
    }

    const deleteTask=(deleteTaskval)=>{
        SetTodo(
            todo.filter((task)=>{
                return task.task !==deleteTaskval
            })
        )
    }
    
    console.log(todo)
    return (
        <div className="todo">

            <input type='text' placeholder="Text..."
                  onKeyDown={(event)=> {
                    if (event.keyCode ==13){
                        AddTask()
                    }
                }}
            ref={inputval}
            onChange={(event)=>{
                setcurrentTodo(event.target.value)
            }}/>
            <button
          
                onClick={AddTask}
            > Add me</button>
            <hr/>

            <div>
            {todo.map((val,key)=>{
                return(
                    <div id="task">
                        <li key={key}>{val.task}</li>
                        <button onClick={()=>deleteTask(val.task)} >X</button>
                    </div>
                )
            })}

            </div>
        </div>
    )
}

export default Todo