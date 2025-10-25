import Products from "@/src/components/product";
import ReviewsPage from "@/src/components/reviews";
import { Suspense } from "react";

export default function ProductPage() {

    return (
        //try removing Suspense components to see the difference in the time taken to load the page
        <div>
            <Suspense fallback={<h2>Loading Products...</h2>}>
                <Products />
            </Suspense>
            <Suspense fallback={<h2>Loading Reviews...</h2>}>
                <ReviewsPage />
            </Suspense>
        </div>
    )
}