import Sidebar from './components/Sidebar/Sidebar';
import Root from './pages/Root/Root';
import style from './App.module.css';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('root');
  const views = {
    root: <Root />,
    courses: <div>Teste</div>,
  };
  return (
    <div className={style.page}>
      <div className={style.sidebar}>
        <Sidebar setView={setView} view={view} />
      </div>
      <main className={style.main}>{views[view]}</main>
    </div>
  );
}

export default App;
