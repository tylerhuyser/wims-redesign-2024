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

  function toggleVisibility(navVisibility: boolean) {
    const layoutContainer = document.getElementsByClassName('layout-container')

    if (layoutContainer.length > 0) {
      const element = layoutContainer[0] as HTMLElement;

      if (!navVisibility) {
        element.style.position = 'fixed'
      } else {
        element.style.removeProperty('position')
      }
      setNavVisibility(!navVisibility)
    }
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
        className={`${styles.navContainer} ${styles.slideInTopNav}`}
        style={
          (windowSize.width <= 768 && scrollDirection === 'up' && !scrolledToTop && !navVisibility) ?
            { transform: 'translateY(0px)', boxShadow: 'none', height: "calc(75px - 20px)" }
            :
            (windowSize.width <= 768 && scrollDirection === 'down' && !scrolledToTop && !navVisibility) ?
              { transform: 'translateY(-75px)', boxShadow: 'none', height: "calc(75px - 20px)" }
              :
              (windowSize.width > 768 && scrollDirection === 'up' && !scrolledToTop && !navVisibility) ?
                { transform: 'translateY(0px)', boxShadow: 'none', height: "calc(100px - 20px)" }
                :   
                (windowSize.width > 768 && scrollDirection === 'down' && !scrolledToTop && !navVisibility) ?
                  { transform: 'translateY(-100px)', boxShadow: 'none', height: "calc(100px - 20px)" }
                  :
                  { transform: 'none' }
        }
      >
        <Link href="/" className={styles.navLogoContainer}>
          <Image
            src="/_assets/AWOKEN-logo-white.png"
            width={50}
            height={50}
            alt="AWOKEN Logo - White"
          />
          <p className={styles.navLogoTitle}>A<span className={styles.boldText}>WOKE</span>N</p>
        </Link>

        <NavLinks context="desktop" onLinkClick={null} navVisibility={false} />
        <NavMenuIcons onClick={() => toggleVisibility(navVisibility)} navVisibility={navVisibility} />
      </div>
    
      <NavLinks context="mobile" onLinkClick={() => toggleVisibility(navVisibility)} navVisibility={navVisibility} />
    </>
  )
}
