'use client'

import { useEffect, useState } from 'react'

export default function ScrollDebugger() {
  const [logs, setLogs] = useState<string[]>([])
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>
    let lastScrollY = window.scrollY
    let scrollBlocked = false

    const handleScroll = () => {
      setIsScrolling(true)
      
      const currentScrollY = window.scrollY
      const delta = Math.abs(currentScrollY - lastScrollY)
      
      // Detect if scroll is blocked (trying to scroll but position not changing)
      if (delta < 1 && !scrollBlocked) {
        scrollBlocked = true
        setLogs(prev => [...prev, `⚠️ SCROLL BLOCKED at ${currentScrollY}px`])
      } else if (delta > 1 && scrollBlocked) {
        scrollBlocked = false
        setLogs(prev => [...prev, `✅ SCROLL UNBLOCKED at ${currentScrollY}px`])
      }
      
      lastScrollY = currentScrollY

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    // Monitor long tasks (> 50ms)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          setLogs(prev => [...prev, `🐌 Long task: ${Math.round(entry.duration)}ms`])
        }
      }
    })
    
    observer.observe({ entryTypes: ['longtask'] })

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
      observer.disconnect()
    }
  }, [])

  // Only show on mobile
  if (typeof window !== 'undefined' && window.innerWidth > 768) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      maxHeight: '200px',
      overflow: 'auto',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      fontSize: '10px',
      padding: '10px',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      <div style={{ 
        color: isScrolling ? '#00ff00' : '#666',
        fontWeight: 'bold',
        marginBottom: '5px'
      }}>
        {isScrolling ? '🟢 SCROLLING' : '⚪ IDLE'}
      </div>
      {logs.slice(-10).reverse().map((log, i) => (
        <div key={i}>{log}</div>
      ))}
    </div>
  )
}