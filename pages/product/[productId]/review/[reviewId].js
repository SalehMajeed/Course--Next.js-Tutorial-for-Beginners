import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  return (
    <h1>
      Details about product of nested reviewId {router.query.reviewId} and
      ProductID {router.query.productId}
    </h1>
  );
}

export default Review;
