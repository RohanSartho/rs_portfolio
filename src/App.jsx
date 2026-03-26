/**
 * Main Application Component
 * Manages global state: theme, admin mode, and uploadable assets.
 *
 * Admin mode: visit /?admin=true to show the AdminPanel for uploading
 * profile photo and resume. Assets persist in localStorage.
 */

import { useEffect, useState } from "react"
import { Analytics } from '@vercel/analytics/react'

import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  References,
  Contact,
  Footer,
} from "./components";

import AdminPanel from "./components/AdminPanel";
import { useAdminAssets } from "./hooks/useAdminAssets";

import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  // Detect admin mode from URL query param (?admin=true)
  const isAdminMode = new URLSearchParams(window.location.search).get('admin') === 'true';

  const adminAssets = useAdminAssets();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark')
  }, []);

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
        : 'bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Hero
        darkMode={darkMode}
        profileImage={adminAssets.profileImage}
        resumeData={adminAssets.resumeData}
      />

      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <References darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      <Analytics />

      {isAdminMode && (
        <AdminPanel
          profileImage={adminAssets.profileImage}
          resumeData={adminAssets.resumeData}
          uploadProfileImage={adminAssets.uploadProfileImage}
          uploadResume={adminAssets.uploadResume}
          clearProfileImage={adminAssets.clearProfileImage}
          clearResume={adminAssets.clearResume}
          uploadError={adminAssets.uploadError}
          uploadSuccess={adminAssets.uploadSuccess}
        />
      )}
    </div>
  )
}

export default App
