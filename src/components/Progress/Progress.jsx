import { useEffect } from 'react';
import { useState } from 'react';
import style from './Progress.module.css';

function Progress() {
  const [progress, setProgress] = useState(0);
  const progressFinal = 10;
  const speed = 30;

  const animateProgressBar = () =>
    setTimeout(() => {
      setProgress(progress + 1);
    }, speed);

  useEffect(() => {
    if (progress < progressFinal) animateProgressBar();
  }, [progress]);

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='font-medium text-2xl' style={{ color: '#181B1A' }}>
        Seu progresso
      </h2>
      <div className='flex gap-12' style={{ color: '#333' }}>
        <div className={style['progress-container']}>
          <div
            className={style['progress-bar']}
            style={{
              background: `conic-gradient(
                #FB6D3A ${progress * 3.6}deg,
                #ddd ${progress * 3.6}deg`,
            }}
          >
            <div className={style['progress-value']}>{`${progress}%`}</div>
          </div>
        </div>
        <div className='flex flex-col gap-6 p-8 justify-start'>
          <p>
            Você está na formação{' '}
            <span className='font-semibold'>Desenvolvimento Full-Stack</span>
          </p>
          <p>
            Consuma conteúdos para progredir no{' '}
            <span className='font-semibold'>Orange Evolution</span>
          </p>
          <p>
            Na aba <span className='font-semibold'>Meu perfil</span> você pode
            mudar sua formação
          </p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
