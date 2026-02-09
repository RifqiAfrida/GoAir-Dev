"use client";

import { useState } from "react";
import styles from "./styles/RightPanel.module.css";

type RightPanelProps = {
  userName: string;
};

export default function RightPanel({ userName }: RightPanelProps) {
  const [open, setOpen] = useState(false);

  // data statis dulu
  const cards = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: "Tug Boat",
    location: "Tanjung Priok, Jakarta",
    date: "03/02/2026 - 28/02/2026",
    area: "Domestic",
    cargo: "CPO, CRKO, COAL",
    size: "0 KL",
  }));

  return (
    <aside className={styles.panel}>
      {/* profile */}
      <div className={styles.profileWrapper}>
        <button className={styles.profileBtn} onClick={() => setOpen(!open)}>
          👤 {userName}
        </button>

        {open && (
          <div className={styles.dropdown}>
            <button>Profile</button>
            <button>Company</button>
            <button className={styles.logout}>Log out</button>
          </div>
        )}
      </div>

      {/* USER */}
      <div className={styles.user}>
        <div className={styles.avatar}>👤</div>
        <div>
          <div className={styles.userName}>Administrator Airin</div>
          <div className={styles.userEmail}>gmail@gmail.com</div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className={styles.summary}>
        <div className={`${styles.summaryCard} ${styles.open}`}>
          <span>Open</span>
          <b>1</b>
        </div>
        <div className={`${styles.summaryCard} ${styles.negotiation}`}>
          <span>Negotiation</span>
          <b>0</b>
        </div>
        <div className={`${styles.summaryCard} ${styles.fixing}`}>
          <span>Fixing</span>
          <b>303</b>
        </div>
        <div className={`${styles.summaryCard} ${styles.history}`}>
          <span>History</span>
          <b>314</b>
        </div>
      </div>

      {/* card list */}
      <div className={styles.cardList}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.ship}>🚢 {card.title}</span>
              <span className={styles.badge}>OP</span>
            </div>

            <div className={styles.cardBody}>
              <p>📍 {card.location}</p>
              <p>📅 {card.date}</p>
            </div>

            <div className={styles.cardFooter}>
              <span>{card.area}</span>
              <span>{card.size}</span>
            </div>

            <div className={styles.cargo}>
              Last 3 cargo: <b>{card.cargo}</b>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
