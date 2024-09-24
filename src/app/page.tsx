"use client";
import "./page.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  /**
   * hooks
   */
  const router = useRouter();

  /**
   * effects
   */
  useEffect(() => {
    router.push("/home");
  }, [router]);
}
