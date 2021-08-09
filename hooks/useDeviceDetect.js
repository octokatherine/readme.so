import { useState, useEffect } from 'react'

export default function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(userAgent.match(/Mobi|Android|BlackBerry|iPhone/i))
    setMobile(mobile)
  }, [])

  return { isMobile }
}
