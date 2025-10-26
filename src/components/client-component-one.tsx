"use client"

import React from "react";
import ClientComponentTwo from "./client-component-two";
import { ServerComponentOne } from "./server-component-one";

export default function ClientComponentOne({children}:{children:React.ReactNode}) {
    const [name, setName] = React.useState("Client Component One");
    return (
        <>
            <div>
                Client Component One
            </div>
            {/* <ClientComponentTwo /> */}
            {/* <ServerComponentOne/> */}
            {children}
        </>
    );
}