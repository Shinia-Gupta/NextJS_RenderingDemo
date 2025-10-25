export default async function Products() {
 await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 3 seconds delay
 
    return (
    <>
    <h1>Products page</h1>
    </>
  )
}