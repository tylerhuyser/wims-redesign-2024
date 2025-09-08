import Link from 'next/link';

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
    { name: 'HOME', path: '/', external: false },
    { name: 'ABOUT', path: '/about', external: false },
    { name: 'RANKINGS', path: 'https://rankings.gamesetblog.com/', external: true },
  ];

  const containerClass =
  context === "desktop"
    ? styles.desktopNavLinksContainer
    : navVisibility
    ? `${styles.mobileMenu} ${styles.mobileMenuVisible}`
    : `${styles.mobileMenu} ${styles.mobileMenuHidden}`;
  
    return (
      <div className={containerClass}>
        {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                className={context === "desktop" ? styles.desktopNavLink : styles.mobileNavLink}
                target="_blank"
                rel="noopener noreferrer"
                href={link.path}
                onClick={context === 'mobile' && onLinkClick ? onLinkClick : undefined}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={index}
                className={context === "desktop" ? styles.desktopNavLink : styles.mobileNavLink}
                href={link.path}
                onClick={context === 'mobile' && onLinkClick ? onLinkClick : undefined}
              >
                {link.name}
              </Link>
            )
        ))}
      </div>
    );
  };
