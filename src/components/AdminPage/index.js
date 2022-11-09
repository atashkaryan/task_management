import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UsersContext } from "../../UsersContextProvider/UsersContextProvider"

function AdminPage(){
    const {users,addNewUser} = useContext(UsersContext)
    const navigate = useNavigate()
    const [inputValue,setInputValue]= useState("")

    function handleAddNewUser(){
        addNewUser(inputValue)
        setInputValue("")
    }
    return(
        <div className="AdminPage">
           <div>
                <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
                <button onClick={handleAddNewUser}>Add New User </button>
            </div>

            <div className="UserBlock">{
                 users.map(user=>{
                return <div key={user.userId} className="UserBlocks" onClick={()=>navigate(`users/${user.userId}`)}>
                    <h1>{user.name}</h1>
                </div>
            })

           }
            </div>
            

           
        </div>
    )
}
export default AdminPage