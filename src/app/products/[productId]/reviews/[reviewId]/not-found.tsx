"use client";
import { usePathname } from "next/navigation";
export default function Notfound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <>
      <h1>
        Review {reviewId} Not Found for product {productId}
      </h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </>
  );
}
