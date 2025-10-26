import { serverSideFunction } from "@/src/utils/server-utils";

export default function ServerRoutePage() {
const result=serverSideFunction() 
 
    return <div>Server Route Page - {result}</div>;
}