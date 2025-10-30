'use client'

import styles from "./NavMenuIcons.module.css"

interface NavMenuIconsProps {
  onClick: () => void,
  navVisibility: boolean;
}

export default function NavMenuIcons({ onClick, navVisibility }: NavMenuIconsProps) {

  let menuIconClass =
    navVisibility
      ? `${styles.menuIcon} ${styles.open}`
      : `${styles.menuIcon} ${styles.closed}`
  
  return (
    <div className={styles.mobileMenuToggleIconsContainer} onClick={onClick} >
        
    <div className={menuIconClass} >
      <span className={styles.menuIconLine} id={styles.line1}></span>
      <span className={styles.menuIconLine} id={styles.line2}></span>
      <span className={styles.menuIconLine} id={styles.line3}></span>
    </div>

  </div>
  )
}