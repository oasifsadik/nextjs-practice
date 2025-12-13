"use client";
import { usePathname } from "next/navigation"

export default function notFound(){
    const pathname = usePathname();
    const reviewId = pathname.split("/")[4];
    return(
        <h1>review id : {reviewId} not found</h1>
    )
}