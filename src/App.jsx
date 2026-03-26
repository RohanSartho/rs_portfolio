/**
 * Main Application Component
 * Sidebar layout. Admin mode via /?admin=true.
 */

import { Analytics } from '@vercel/analytics/react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { useAdminAssets } from './hooks/useAdminAssets';

const App = () => {
    const isAdminMode = new URLSearchParams(window.location.search).get('admin') === 'true';
    const adminAssets = useAdminAssets();

    return (
        <div className="flex min-h-screen bg-[#f5f1eb]">

            {/* Fixed left sidebar */}
            <Sidebar
                profileImage={adminAssets.profileImage}
                resumeData={adminAssets.resumeData}
            />

            {/* Scrollable main content — offset by sidebar width on desktop */}
            <main className="flex-1 lg:ml-64 min-w-0">
                <Hero resumeData={adminAssets.resumeData} />
                <About />
                <Projects />
                <Contact />
                <Footer />
            </main>

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
    );
};

export default App;
