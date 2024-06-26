
function UserList({users}){
    return (
        <>
        <h1>UserList</h1>
        {
            users.map(users => {
                return(
                    <div key = {users.id}>
                    <p>{users.name}</p>
                    <p>{users.email}</p>
                    </div>
                )
            })
        }
        </>
    )
}

export default UserList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return {
     props: {
        users: data
     }
    }
    
}