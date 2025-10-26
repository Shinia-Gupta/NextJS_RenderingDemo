'use client'

import { useTheme } from "@/src/components/Theme-Provider";
import { clientSideFunction } from "@/src/utils/client-utils";

// import { serverSideFunction } from "@/src/utils/server-utils";
export default function ClientRoutePage() {
const theme=useTheme()
// const result=serverSideFunction()
const result=clientSideFunction()
    // return <div>Client Route Page - {result}</div>;   
    return (
    <>
    <div style={{color:theme.colors.primary}}>Client Route Page - </div>
    <p>{result}</p>
</>
    )   

}