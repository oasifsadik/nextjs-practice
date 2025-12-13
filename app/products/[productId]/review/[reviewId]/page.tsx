export default async function review({params} : {params : {reviewId :string}}){
    const reviewId = (await params).reviewId
    return <h1>review {reviewId}</h1>
}