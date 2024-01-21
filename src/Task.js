export const Task = (props)=>{
    return(
    <div className="task"
    style={{backgroundColor: props.completed ? "green" : "white"}}>
        <h1>{props.task}</h1>
        <button onClick={() => props.deletTask(props.id) }> X </button>
        <button onClick={() => {props.taskCompleted(props.id)}}> {props.completed ? "setwhite" : "completed"}</button>
    </div>
    )
}