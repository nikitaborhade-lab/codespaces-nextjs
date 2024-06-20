import Link from 'next/link'

function ProductList(){

    return(
        <>
        <Link href= '/'>Home Page</Link>
        <Link href='/product/1'><h1>Product 1</h1></Link>
        <Link href='/product/2'><h1>Product 2</h1></Link>
        <Link href='/product/3'><h1>Product 3</h1></Link>
        </>
    )
}

export default ProductList