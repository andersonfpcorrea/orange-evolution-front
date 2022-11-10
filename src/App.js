import Sidebar from './components/Sidebar/Sidebar';
import Root from './pages/Root/Root';
import style from './App.module.css';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [view, setView] = useState('root');
  const views = {
    root: <Root />,
    courses: <div>Courses</div>,
    myCourses: <div>MyCourses</div>,
    profile: <div>Profile</div>,
  };
  return (
    <div className={style.page}>
      <div className={style.sidebar}>
        <Sidebar setView={setView} view={view} />
      </div>
      <main className={style.main}>
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
