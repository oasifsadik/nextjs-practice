

type Props = {
    params: {productId: string}
}
 export const generateMetadata = async ({
    params
}: Props) => {
    const productId = (await params).productId;
    return {
        title: `Product ${productId} Details`,
    }
 }
export default async function products( {
    params
}: Props)
    {
    const productId = (await params).productId;
    return <h1>product details {productId} </h1>;
        
}