import ClientComponentOne from "@/src/components/client-component-one";
import { ServerComponentOne } from "@/src/components/server-component-one";

export default function InterleavingPage() {
    return (
        <div>
            <h1>Interleaving Page</h1>
            {/* <ServerComponentOne /> */}

            {/* Solving the error of Server Component inside Client Component by passing Server Component as children to Client Component */}
            <ClientComponentOne >
                <ServerComponentOne />
            </ClientComponentOne>
        </div>
    );
}