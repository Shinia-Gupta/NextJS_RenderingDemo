"use client"

import React from "react";
import ClientComponentTwo from "./client-component-two";

export default function ClientComponentOne() {
    const [name, setName] = React.useState("Client Component One");
    return (
        <>
            <div>
                Client Component One
            </div>
            <ClientComponentTwo />
        </>
    );
}