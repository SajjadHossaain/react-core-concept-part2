export default function Friend({friend}){
    const {name,username,email} = friend;
    return(
        <div className="card">
            <h4>Name : {name}</h4>
            <h5>User Name : {username}</h5>
            <h5>Email : {email}</h5>
        </div>
    )
}