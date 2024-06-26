export default function Post({posts}){
    return(
        <>
        <h1>{posts.id} {posts.title}</h1>
        <p>{posts.body}</p>
        </>
    )
}

export async function getStaticPaths(){
    return{
        paths:[
            {
                params: { postId : '1'}
            },
            {
                params: { postId: '2'}
            },
            {
                params: { postId: '3'}
            },
            {
                params: { postId: '4'}
            }
        ],
        fallback : false,
    }

}

export async function getStaticProps(context){
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    return{
        props :{
            posts : data,
        }
    }
}