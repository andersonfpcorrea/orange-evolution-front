import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MyCourses from './pages/MyCourses/MyCourses';
import Explore from './pages/Explore/Explore';
import Roadmap from './pages/Roadmap/Roadmap';
import Profile from './pages/Profile/Profile';

function App() {
  const [view, setView] = useState('home');
  const views = {
    home: <Home />,
    explore: <Explore />,
    roadmaps: <Roadmap />,
    myCourses: <MyCourses />,
    profile: <Profile />,
  };
  return (
    <div className='flex h-screen'>
      <div className='grow-1 max-w-xs'>
        <Sidebar setView={setView} view={view} />
      </div>
      <main className='grow-4 pt-20 pb-6 pl-16 overflow-y-auto overflow-x-hidden'>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={view}
            initial={{ x: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {views[view]}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
