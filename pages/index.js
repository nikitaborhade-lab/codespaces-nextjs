import Link from 'next/link'
import { useRouter } from 'next/router'

function Home(){
 const router = useRouter();

  function handleClick(){
    router.push('/product');
  }

  return(
    <div>
      <h1>Home Page</h1>
    <Link href = '/blog'>Blog Page</Link>
    <Link href= '/product'>Product Page</Link>
    <button onClick={handleClick}>Place Order</button>
    <hr/>
    <Link href = '/posts'>Posts</Link>
    </div>
  )
}

export default Home
