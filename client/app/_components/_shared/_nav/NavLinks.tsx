import Link from 'next/link';

interface NavLinksProps {
  context: 'desktop' | 'mobile'; // Specify that context can only be 'desktop' or 'mobile'
  onLinkClick: (() => void) | null; // Function or null
  navVisibility: boolean; // Boolean to track nav visibility
}

export default function NavLinks({ context, onLinkClick, navVisibility }: NavLinksProps) {

  const links = [
    { name: 'HOME', path: '/', external: false },
    { name: 'ABOUT', path: '/about', external: false },
    { name: 'RANKINGS', path: 'https://rankings.gamesetblog.com/', external: true },
  ];
  
    return (
      <div className={ context === "desktop" ? `${context}-nav-links-container` : navVisibility ? 'mobile-menu mobile-menu-visible' : 'mobile-menu mobile-menu-hidden'}>
        {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                className={`${context}-nav-link`}
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
                className={`${context}-nav-link`}
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
