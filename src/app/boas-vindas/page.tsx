"use client";

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function BoasVindas() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    invoke<string>("greet", { name: "renato" })
      .then((result) => setGreeting(result))
      .catch(console.error);
  }, []);

  return <div className="w-full h-screen">{greeting}</div>;
}
