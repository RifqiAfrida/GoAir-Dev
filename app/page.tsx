"use client";
import Link from "next/link";
import styles from "./style/LandingPage.module.css";

const benefits = [
  {
    title: "Vessel Owner Open Position",
    desc: "Vessel owners can display and offer their ships according to their capacity and position at the port.",
    icon: "🚢",
  },
  {
    title: "Vessel Monitoring",
    desc: "Ship owners and cargo owners can monitor business processes and track ship & goods position in real time.",
    icon: "📡",
  },
  {
    title: "Event Notifications",
    desc: "Receive notifications on all activities so you never miss an opportunity.",
    icon: "🔔",
  },
  {
    title: "Charterer Enquiry",
    desc: "Cargo owners can search vessels by capacity and nearest location.",
    list: [
      "Freight charter",
      "Time charter",
      "Contract of Affreightment",
    ],
    icon: "⚓",
  },
  {
    title: "Contract Management",
    desc: "Instant cargo-to-ship matching, freight trading, and contract management solution.",
    icon: "📄",
  },
];


export default function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <span className={styles.logo}>GoAir</span>
        </div>

        <div className={styles.navRight}>
          <Link href="/login" className={styles.navLink}>
            Login
          </Link>
        </div>
      </nav>

      {/* Landing Page */}
      <main className={styles.main}>
        {/* Section kiri */}
        <div className={styles.leftSection}>
          <h1 className={styles.title}>GoAir</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure unde
            veniam at, deleniti mollitia dolore quae aperiam delectus? Optio
            maiores earum adipisci voluptatum exercitationem doloremque maxime
          </p>
        </div>

        {/* Section kanan */}
        <div className={styles.rightSection}>
          <div className={styles.slider}>
            <img src="/img/broker.svg" />
            <img src="/img/cargo.svg" />
            <img src="/img/ship-owner.svg" />
          </div>
        </div>
      </main>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.featureBox}>
          <div className={styles.featureImage}>
            <img src="/img/broker.svg" alt="Broker" />
          </div>
          <h3>Broker</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, unde explicabo in natus cumque harum nam alias
            veniam ex porro recusandae doloribus distinctio totam soluta!
          </p>
        </div>

        <div className={styles.featureBox}>
          <div className={styles.featureImage}>
            <img src="/img/cargo.svg" alt="Charter" />
          </div>
          <h3>Charter Management</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            doloremque itaque illum corporis incidunt recusandae dolorem.
          </p>
        </div>

        <div className={styles.featureBox}>
          <div className={styles.featureImage}>
            <img src="/img/ship-owner.svg" alt="Ship Owner" />
          </div>
          <h3>Ship Owner</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
            nesciunt eius ratione corrupti fugit accusamus.
          </p>
        </div>
      </section>

      {/* Benefits Website */}
      <section className={styles.benefits}>
        <h2 className={styles.benefitsTitle}>
          Benefit Using <span>GoAir</span>
        </h2>

        <div className={styles.benefitsGrid}>
          {benefits.map((item, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.benefitIcon}>{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                {item.list && (
                  <ul>
                    {item.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          {/* Logo / Brand */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerLogo}>GoAir</h3>
            <p className={styles.footerDesc}>
              Integrated digital platform for charter, broker, and ship owner
              management.
            </p>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <h4>Contact Us</h4>
            <ul>
              <li>Jl. Merpati No. 12, Jakarta</li>
              <li>+62 812-3456-7890</li>
              <li>info@goaircms.com</li>
            </ul>
          </div>

          {/* Links */}
          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Ship Owner Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          © {new Date().getFullYear()} GoAir. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
