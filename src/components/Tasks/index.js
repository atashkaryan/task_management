import { useContext, useState } from "react"
import { UsersContext } from "../../UsersContextProvider/UsersContextProvider"

function Tasks({tasks,Userid,boardId}){
    const {addNewStatus,deleteStatus,addNewTask,deleteTask,editStatus}= useContext(UsersContext)
    const[inputNewTask,setInputNewTask]= useState('')
    const [inputStatus,setInputStatus]= useState('')
    const statuses = Object.keys(tasks)
    function handleAddNewStatus(){
        if(inputStatus){
            addNewStatus(inputStatus,Userid,boardId);
            setInputStatus("")
        }   
    }
    function handleAddNewTask(){
        addNewTask(inputNewTask,Userid,boardId);
        setInputNewTask('')
    }
    function handleDeleteTask(taskId,status){
        deleteTask(taskId,status,Userid,boardId)
    }
    function hadnleEditStatus(oldStatus,newStatus,task){
        editStatus(oldStatus,newStatus,task,Userid,boardId)

    }
    
   
    return(
        <>
        <div >
                <input
                    value={inputStatus}
                    onChange={e => { setInputStatus(e.target.value) }}
                    placeholder="new status" />
                <button onClick={handleAddNewStatus}>ADD NEW STATUS</button>
            </div>
            <div className='tasks'>
                {

                    statuses.map(status => {
                        return (
                            <div className='statusTask' key={status}>
                                <h1 className='statusTitle'>{status}</h1>
                                <div className='tasksdiv'> 
                                {tasks[status].map(task => {
                                    return (
                                           <div className="task" key={task.taskId}> 
                                            <div>
                                                <h1>{task.taskName}</h1>
                                                <button onClick={()=>{handleDeleteTask(task.taskId,status)}}>Delete</button>
                                            </div>
                                            <div className="statusButton">
                                                {
                                                    statuses.map(el=>{
                                                       return(
                                                        <button onClick={()=>{hadnleEditStatus(status,el,task)}} key={el}>{el}</button>
                                                       )
                                                    })
                                                }
                                                
                                            </div>
                                           </div>

                                        
                                    )

                                    
                                })}

                                <div>
                                    {
                                        status=="todo"?<div>
                                            <input placeholder="new task" value={inputNewTask} onChange={(e)=>{
                                                setInputNewTask(e.target.value)
                                            }}></input>
                                            <button onClick={handleAddNewTask}>Add New Task</button>
                                        </div>:<button onClick={()=>{deleteStatus(status,Userid,boardId)}}>Delete Status </button>
                                    }
                                </div>
                                </div>
                              

                            </div>)
                    })
                }
            </div>
        </>
    )
    }
    
    export default Tasks