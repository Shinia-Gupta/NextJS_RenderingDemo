//stop the default behavior of prerendering the pages that do not exist in the getStaticParams() method

export const dynamicParams = false;

export async function generateStaticParams() {
return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
];
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
const { id } = await params;

return(
    <>
    <h1>Product Detail Page</h1>
    <p>Product ID: {id} rendered at {new Date().toLocaleTimeString()}</p>
    </>
)

}