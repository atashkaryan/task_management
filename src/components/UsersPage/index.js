import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UsersContext } from "../../UsersContextProvider/UsersContextProvider"

function UserPage(){
const {id}= useParams()
const navigate= useNavigate()
const [inputValue,setInputValue]= useState("")
const user = useContext(UsersContext).users.find(user=>user.userId==id)
const{addNewBoard}= useContext(UsersContext)

function handleAddNewBoard(){
    addNewBoard(inputValue,id);
    setInputValue("");
}
    return(
        <div className="UserPage">
            <div className="hedar">
            <button className='goBack' onClick={()=>{navigate('/')}}>Back</button>
                <h1>User :{ user.name}</h1>
            </div>
            
            <div className="BoardBlocks">
            <div className="inputBoard">
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} placeholder="new board"></input>
                <button onClick={handleAddNewBoard}> Add New Board</button>
            </div>
                {
                    
                   user.boards.map(board=>{
                     return <div key={board.boardId} className="boardBlock" onClick={()=>navigate(`/users/${id}/boards/${board.boardId}`)}>
                      {board.boardName}
                        
                     </div>
                    
                   })

                }
               
            </div>
            
            
        </div>
    )
    }
    
    export default UserPage