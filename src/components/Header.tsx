"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";

/** Sticky header that hides on scroll-down, shows on scroll-up */
export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const header = headerRef.current;
      if (!header) return;
      const scrollingDown = currentY > lastY.current;
      header.classList.toggle(styles.hide, scrollingDown && currentY > 100);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.banner}>
        <h1>SPECTRE LIBRARY</h1>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Library</Link>
        <Link href="/request">Request</Link>
        <Link href="/donate">Donate</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}