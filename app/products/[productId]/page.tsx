export default async function products( {
    params
}: {
    params: {productId: string}
})
    {
    const productId = (await params).productId;
    return <h1>product details {productId} </h1>;
        
}