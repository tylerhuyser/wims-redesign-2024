'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useScrollDirection } from '@/app/hooks'
import { useWindowSize } from '@/app/hooks';

import './Nav.css'

export default function Nav() {
  const [navVisibility, setNavVisibility] = useState(false)

  function toggleVisibility (navVisibility: boolean) {
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
        const element = layoutContainer[0] as HTMLElement; // Assert the type again
        element.style.removeProperty('position');
      }
    }
  }, [windowSize])

  // Scroll Direction State and Effect:

  const scrollDirection = useScrollDirection({ initialDirection: 'down' });
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

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
    
  <div className='nav-container slide-in-top-nav' style={

    (windowSize.width <= 758 && scrollDirection === 'up' && !scrolledToTop && !navVisibility) ?
      { transform: 'translateY(0px)',
        boxShadow: 'none',
        height: "calc(75px - 20px)"
      }
      :
      (windowSize.width <= 758 && scrollDirection === 'down' && !scrolledToTop && !navVisibility) ?
        {
          transform: 'translateY(-75px)',
          boxShadow: 'none',
          height: "calc(75px - 20px)"
        }
        :
        (windowSize.width > 758 && scrollDirection === 'up' && !scrolledToTop && !navVisibility) ?
        { transform: 'translateY(0px)',
          boxShadow: 'none',
          height: "calc(100px - 20px)"
        }
        :   
        (windowSize.width > 758 && scrollDirection === 'down' && !scrolledToTop && !navVisibility) ?
        {
          transform: 'translateY(-100px)',
          boxShadow: 'none',
          height: "calc(100px - 20px)"
          }
          :
          { transform: 'none' }
    }>
      
    <Link href="/" className="nav-logo-container">

      <IconLogo />

      <p className="nav-logo-title">GAME, SET, BLOG</p>
        
    </Link>

    <NavLinks context="desktop" onLinkClick={null} navVisibility={null} />
      
    <NavMenuIcons onClick={() => toggleVisibility(navVisibility)} navVisibility={navVisibility} />

  </div>
    
  <NavLinks context="mobile" onLinkClick={() => toggleVisibility(navVisibility)} navVisibility={navVisibility} />
    
  </>
}