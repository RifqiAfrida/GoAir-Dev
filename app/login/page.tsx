"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../style/LoginPage.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className={styles.page}>
      {/* Wave background */}
      <div className={styles.wave}></div>

      {/* Login Card */}
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.formBox}>
          <div className={styles.topRow}>
            <Link href="/" className={styles.backBtn}>
              ← Back
            </Link>
            <span className={styles.brand}>
              Login to <b>GoAir</b>
            </span>
          </div>

          <h2>Welcome back!</h2>
          <p className={styles.subtitle}>Enter your email and password below</p>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />

          <button type="submit" className={styles.submitButton}>
            Log In
          </button>

          <div className={styles.or}>OR</div>

          <button type="button" className={styles.altButton}>
            Create Ship Owner Account
          </button>
          <button type="button" className={styles.altButton}>
            Create Charterer Account
          </button>
          <button type="button" className={styles.altButton}>
            Create Broker Account
          </button>
        </form>
      </div>
    </div>
  );
}
