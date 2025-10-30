'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useScrollDirection } from '@/app/hooks'
import { useWindowSize } from '@/app/hooks';

import NavLinks from './NavLinks';
import NavMenuIcons from './NavMenuIcons';

import styles from './Nav.module.css'

export default function Nav() {
  const [navVisibility, setNavVisibility] = useState(false)
  const [ignoreScroll, setIgnoreScroll] = useState(false);

  function toggleVisibility(navVisibility: boolean) {
      if (!navVisibility) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.removeProperty('overflow')
      }
      setNavVisibility(!navVisibility)
  }

  let windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width >= 1024) {
      setNavVisibility(false)
      const layoutContainer = document.getElementsByClassName('layout-container')
      if (layoutContainer.length > 0) {
        const element = layoutContainer[0] as HTMLElement
        element.style.removeProperty('position')
      }
    }
  }, [windowSize])

  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledToTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <div 
          className={`${styles.navContainer} ${
            scrollDirection === 'down' && !scrolledToTop && !navVisibility && !ignoreScroll
              ? styles.navHidden
              : styles.navVisible
          }`}
      >
        <Link href="/" className={styles.navLogoContainer}>
          <Image
            src="/optimized-images/logos/AWOKEN-logo-white.webp"
            width={50}
            height={50}
            alt="AWOKEN Logo - White"
          />
          <p className={styles.navLogoTitle}>A<span className={styles.boldText}>WOKE</span>N</p>
        </Link>

        <NavLinks
          context="desktop"
          onLinkClick={null}
          navVisibility={false}
          setIgnoreScroll={setIgnoreScroll}
        />
        <NavMenuIcons onClick={() => toggleVisibility(navVisibility)} navVisibility={navVisibility} />
      </div>
    
      <NavLinks
        context="mobile"
        onLinkClick={() =>
        toggleVisibility(navVisibility)} navVisibility={navVisibility}
        setIgnoreScroll={setIgnoreScroll}
      />
    </>
  )
}
