import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock as lock } from "@fortawesome/free-solid-svg-icons";
import { faUnlock as unlock } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase as bcase } from "@fortawesome/free-solid-svg-icons";
import { faUserTie as user } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as message } from "@fortawesome/free-solid-svg-icons";
import { faTasks as tasks } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideNavBar.module.css";

const SideNavBar = () => {
  const [isSidebarLocked, setIsSidebarLocked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    typeof window !== "undefined" && window.innerWidth >= 800
  );

  const toggleLock = () => {
    setIsSidebarLocked(!isSidebarLocked);
  };

  const handleMouseLeave = () => {
    if (!isSidebarLocked) {
      setIsSidebarOpen(false);
    }
  };

  const handleMouseEnter = () => {
    if (!isSidebarLocked) {
      setIsSidebarOpen(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className={`${styles.sidebar} ${isSidebarOpen ? "" : styles.close} ${
        isSidebarLocked ? styles.locked : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.logo_items} `}>
        <button
          id="lock-icon"
          className={styles.lock_icon}
          onClick={toggleLock}
        >
          {isSidebarLocked ? (
            <>
              <FontAwesomeIcon
                icon={lock}
                className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
              />
              <span className={styles.logo_title}>Закрепить</span>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={unlock}
                className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_open_alt}`}
              />
              <span className={styles.logo_title}>Закрепить</span>
            </>
          )}
        </button>
        {/* <button id="sidebar-close" className={styles.sidebar_close} onClick={toggleSidebar}>
          <i className={`${styles.bx} ${styles.bx_x}`}></i>
        </button> */}
      </div>
      <div className={styles.menu_container}>
        <div className={styles.menu_items}>
          <ul className={styles.menu_item}>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="#">
                  <FontAwesomeIcon
                    icon={bcase}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Главная</span>
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={bcase}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="#">
                  <FontAwesomeIcon
                    icon={user}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Продукты</span>
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={user}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="#">
                  <FontAwesomeIcon
                    icon={message}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Сервисы</span>
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={message}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="#">
                  <FontAwesomeIcon
                    icon={lock}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Сервисы</span>
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={lock}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
            <div className={`${styles.menu_title} ${styles.flex}`}>
              <span className={styles.title}>
                <Link className={styles.link} href="#">
                  <FontAwesomeIcon
                    icon={tasks}
                    className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                  />
                  <span className={styles.name}>Сервисы</span>
                </Link>
              </span>
              <span className={styles.ico}>
                <FontAwesomeIcon
                  icon={tasks}
                  className={`${styles.fa_solid} ${styles.fa_bars} ${styles.bx} ${styles.bx_lock_alt}`}
                />
              </span>
            </div>
          </ul>
        </div>

        {/* <div className={`${styles.sidebar_profile} ${styles.flex}`}>
          <span className={styles.nav_image}>
            <img src="images/profile.jpg" alt="logo_img" />
          </span>
          <div className={styles.data_text}>
            <span className={styles.name}>Mukul</span>
            <span className={styles.email}>viral@gmail.com</span>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default SideNavBar;
