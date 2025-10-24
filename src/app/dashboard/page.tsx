"use client";

import { useState } from "react";

export default function Dashboard() {
const [name, setName] = useState("User");
console.log("Dashboard logged");

    return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Dashboard Page
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          This is the dashboard page of the application.
        </p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-4 p-2 border border-gray-300 rounded" />
        <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Hello, {name}!
        </p>
      </main>
    </div>
  );
}