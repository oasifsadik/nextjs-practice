import Link from "next/link";

export default function products(){
    const productId =5;
    return <>
         <h1><Link href="/">Home</Link></h1>;
         <h1>product list </h1>;
        <h2> <Link href="">product 1</Link> </h2>;
        <h2> <Link href="/products/2">product 2</Link> </h2>;
        <h2> <Link href="/products/3" replace>product 3</Link> </h2>;
        <h2> <Link href={`/products/${productId}`}>product 3</Link> </h2>;
    </>
}