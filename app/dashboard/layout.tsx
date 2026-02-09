import styles from "./style/dashboard.module.css";
import Sidebar from "../components/sidebar";
import RightPanel from "../components/rightpanel";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      {children}
      <RightPanel userName="Rifqi Afrida" />
    </div>
  );
}
