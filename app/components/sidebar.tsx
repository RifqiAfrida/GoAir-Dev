"use client";

import styles from "./styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Go Air</h3>

      <ul className={styles.menu}>
        <li className={styles.menuItem}>Home</li>
        <li className={styles.menuItem}>Chartering</li>
        <li className={styles.menuItem}>Ship Owner</li>
        <li className={styles.menuItem}>Broker</li>
        </ul>
    </aside>
  );
}
