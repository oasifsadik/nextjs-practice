"use client";
import { useRouter } from "next/navigation";
export default function OrderPage() {
    const router = useRouter();
    const handelClick = () => {
        alert("Order placed successfully!");
         router.back();
    }

  return (
    <main>
      <h1>Order Page</h1>
      <button onClick={handelClick}>Place Order</button>
    </main>
  );
}