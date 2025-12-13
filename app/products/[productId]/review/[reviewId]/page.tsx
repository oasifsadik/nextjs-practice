import { notFound } from "next/navigation"
export default async function review({params} : {params : {reviewId :string}}){
    const reviewId = (await params).reviewId;
    if ( parseInt(reviewId) > 10 ){
        notFound();
    }
    return <h1>review {reviewId}</h1>
}