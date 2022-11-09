import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UsersContext } from "../../UsersContextProvider/UsersContextProvider"
import Tasks from '../Tasks/index'
function Boards(){
const {Userid,boardId} = useParams()
const navigate= useNavigate()
const board= useContext(UsersContext)
.users.find(user=> user.userId == Userid)

.boards.find(board=> board.boardId == boardId )
return(
    <div className="Boards">
       
       <div className='boardHeader'>
          <button className='goBack' onClick={()=>{navigate(`/users/${Userid}`)}} >Back</button>
          <h1> Board: {board.boardName}</h1>
        </div>
        <Tasks tasks= {board.tasks} Userid={Userid} boardId={boardId} />
    
    </div>
)
}

export default Boards