// A simple Next.js Server component.
//react hooks won't work and will cause errors until the file is converted to a Client component

// import { useState } from "react";

//importing cookies to demonstrate automatic switching to dynamic rendering strategy by nextjs
import { cookies } from "next/headers";

export default async function About() {
// const [name, setName] = useState("User"); // This will cause an error in a Server component

const cookieStore = await cookies();
const theme=cookieStore.get("theme")
console.log("Theme cookie value:", theme?.value);

return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          About Page
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is the about page of the application.
        </p>
        <p>{new Date().toLocaleTimeString()}</p>
      </main>
    </div>
  );
}