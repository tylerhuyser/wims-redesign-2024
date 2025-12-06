'use client'

import Link from "next/link";
import styles from "./NavLinks.module.css"

interface NavLinksProps {
  context: 'desktop' | 'mobile'; 
  onLinkClick: (() => void) | null; 
  navVisibility: boolean;
  setIgnoreScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavLinks({
  context,
  onLinkClick,
  navVisibility,
  setIgnoreScroll
}: NavLinksProps) {

  const links = [
    { name: 'MISSION', path: '#mission' },
    { name: 'APP', path: '#app' },
    { name: 'VR', path: '#vr' },
    { name: 'WORKPLACES', path: '#workplaces' },
    { name: 'COMMUNITIES', path: '#communities' },
    { name: 'CONTACT', path: '#contact' },
  ];

  const getOffsetPosition = (element: HTMLElement) => {
    const headerOffset = window.innerWidth < 1024 ? 75 : 80;
    return element.getBoundingClientRect().top + window.scrollY - headerOffset
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();

    setIgnoreScroll(true)

    const sectionId = path.replace("#", "");
    const target = document.getElementById(sectionId);
    if (!target) return;

    // 1. Close Mobile menu
    if (onLinkClick) onLinkClick();

    // 2. Initiate a Delay for Lazy Loaded Content to Load
    requestAnimationFrame(() => {
      const offsetPosition = getOffsetPosition(target);
      
      window.scrollTo({ 
        top: offsetPosition, 
        behavior: "smooth" 
      });

      // Single retry after animation completes
      setTimeout(() => {
        const finalPosition = getOffsetPosition(target);
        if (Math.abs(window.scrollY - finalPosition) > 5) {
          window.scrollTo({ 
            top: finalPosition, 
            behavior: "smooth" 
          });
        }
        
        // Re-enable scroll detection
        setTimeout(() => {
          window.scrollBy(0, 1);
          setTimeout(() => {
            window.scrollBy(0, -1);
            setIgnoreScroll(false);
          }, 50);
        }, 500);
      }, 800);
    });
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
