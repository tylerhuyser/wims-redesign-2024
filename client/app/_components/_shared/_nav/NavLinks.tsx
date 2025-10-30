'use client'

import Link from "next/link";
import styles from "./NavLinks.module.css"

interface NavLinksProps {
  context: 'desktop' | 'mobile'; 
  onLinkClick: (() => void) | null; 
  navVisibility: boolean; 
}

export default function NavLinks({
  context,
  onLinkClick,
  navVisibility
}: NavLinksProps) {

  const links = [
    { name: 'MISSION', path: '#mission' },
    { name: 'APP', path: '#app' },
    { name: 'VR', path: '#vr' },
    { name: 'WORKPLACES', path: '#workplaces' },
    { name: 'COMMUNITIES', path: '#communities' },
    { name: 'CONTACT', path: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();

    const sectionId = path.replace("#", "");
    const target = document.getElementById(sectionId);
    if (!target) return;

    // 1. Close Mobile menu
    if (onLinkClick) onLinkClick();

    // 2. Initiate a Delay for Lazy Loaded Content to Load
    setTimeout(() => {
      const headerOffset = window.innerWidth < 1024 ? 75 : 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      // 3. Additional Retry for Lazy Content On Lower Reaches of Layout
      setTimeout(() => {
        const correctedPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: correctedPosition, behavior: "smooth" });
      }, 800);
    }, 200);
  };
  

  const containerClass =
  context === "desktop"
    ? styles.desktopNavLinksContainer
    : navVisibility
    ? `${styles.mobileMenu} ${styles.mobileMenuVisible}`
    : `${styles.mobileMenu} ${styles.mobileMenuHidden}`;
  
    return (
      <div className={containerClass}>

        {links.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className={context === 'desktop' ? styles.desktopNavLink : styles.mobileNavLink}
            onClick={(e) => handleClick(e, link.path)}
          >
            {link.name}
          </a>
        ))}

        <Link
          href="https://brave-neumann-a7bc83.netlify.app/"
          className={context === 'desktop' ? `${styles.desktopNavLink} ${styles.externalNavLinkDesktop}` : `${styles.mobileNavLink}  ${styles.externalNavLinkMobile}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onLinkClick || undefined}>
          LOGIN
        </Link>

      </div>
    );
  };
