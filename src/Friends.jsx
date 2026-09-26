import { use } from "react"
import Friend from "./Friend"
export default function Friends({friendsPromise}){
    const users = use(friendsPromise)
    return(
        <div className="card">
            <h3>Friends : {users.length}</h3>
            {
                users.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}