import React from 'react'
import './Loader.css'

export default function Loader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <div className="loader-container">

        </div>
    </>
  )
}