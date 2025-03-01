import React from 'react'
import './Footer.css'

export default function Footer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <div className="footer-container">

            <p className="footer-copy">ALL RIGHTS RESERVED. © 2025</p>

        </div>
    </>
  )
}