export default function Post({post}){
    const {id,title,body} = post;
    return(
        <div className="card">
            <h2>Post ID : {id}</h2>
            <h1>Title : {title}</h1>
        </div>
    )
}