'use client'

import { useTheme } from "@/src/components/Theme-Provider";

// import { serverSideFunction } from "@/src/utils/server-utils";
export default function ClientRoutePage() {
const theme=useTheme()
// const result=serverSideFunction()
    // return <div>Client Route Page - {result}</div>;   
    return <div style={{color:theme.colors.primary}}>Client Route Page - </div>;   

}