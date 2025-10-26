import { ImageSlider } from "@/src/components/imageSlider";
import { clientSideFunction } from "@/src/utils/client-utils";
import { serverSideFunction } from "@/src/utils/server-utils";

export default function ServerRoutePage() {
    const result = serverSideFunction()

    //trying to access the client only code in a server component when we have specified client-only package
    // const result2=clientSideFunction()

    return (
        <>
            <div>Server Route Page - {result}</div>
            {/* <p>{result2}</p> */}
            <ImageSlider />
        </>
    );
}