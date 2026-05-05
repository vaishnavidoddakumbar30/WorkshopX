'use client'

import { useState } from 'react'
import TerminalIntro from '@/components/TerminalIntro'
import MainPage from './MainPage'

export default function Home() {

  const [loaded, setLoaded] = useState(false)

  if (!loaded) {
    return <TerminalIntro onFinish={() => setLoaded(true)} />
  }

  return <MainPage />
}