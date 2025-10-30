'use client'

import styles from "./HeroV3.module.css"

export default function HeroButton() { 

  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    path: string
  ) => {
    e.preventDefault();
    const id = path.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <button className={styles.heroButton} onClick={(e) => handleClick(e, "#contact")}>Get Started</button>
  )
}