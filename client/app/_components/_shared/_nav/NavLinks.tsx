'use client'

import styles from "./NavLinks.module.css"

interface NavLinksProps {
  context: 'desktop' | 'mobile'; // Specify that context can only be 'desktop' or 'mobile'
  onLinkClick: (() => void) | null; // Function or null
  navVisibility: boolean; // Boolean to track nav visibility
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

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    console.log("Clicked:", path);

    const id = path.replace("#", "");
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }

    if (onLinkClick) onLinkClick?.();
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
      </div>
    );
  };
