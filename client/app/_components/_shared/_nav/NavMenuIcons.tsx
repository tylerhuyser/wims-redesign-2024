'use client'

import "./NavMenuIcons.css"

interface NavMenuIconsProps {
  onClick: () => void,
  navVisibility: boolean; // Boolean to track nav visibility
}

export default function NavMenuIcons({ onClick, navVisibility }: NavMenuIconsProps) {
  
  return (
    <div className='mobile-menu-toggle-icons-container' onClick={onClick} >
        
    <div className={navVisibility ? 'menu-icon open' :  'menu-icon closed'} >
      <span className='menu-icon-line' id="line-1"></span>
      <span className='menu-icon-line' id="line-2"></span>
      <span className='menu-icon-line' id="line-3"></span>
    </div>

  </div>
  )
}