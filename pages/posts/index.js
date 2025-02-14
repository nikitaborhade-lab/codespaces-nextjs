import Link from "next/link";

export default function PostLists( { posts }){
    return(
        <>
        <h1>Posts List</h1>
        {
            posts.map(post => {
                return(
                    <div key = {post.id}>
                        <Link href= {`posts/${post.id}`} passHref>
                    <p>{post.id} {post.title}</p> 
                    </Link>
                    <hr/>
                 </div>
                )
            })
        }
        </>
    )
}

export async function  getStaticProps(){
      const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json()

    return{
        props:{
            posts : data.slice(0,4)
        }
    }
}