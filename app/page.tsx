"use client";
import { Button } from "@/components/ui/button";

const handleClick = async () => {
  const res = await fetch("/api/lidl", {
    method: "POST",
    body: JSON.stringify({ name: "World" }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-400">
      <main>
        <h1>Pilot Preis!</h1>
        <Button onClick={handleClick} variant="default">
          Click me
        </Button>
      </main>
    </div>
  );
}
