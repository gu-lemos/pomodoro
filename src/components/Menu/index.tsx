import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink}>
        <HouseIcon />
      </a>

      <div className={styles.menuLink}>
        <HistoryIcon />
      </div>

      <div className={styles.menuLink}>
        <SettingsIcon />
      </div>

      <div className={styles.menuLink}>
        <SunIcon />
      </div>
    </nav>
  );
}
