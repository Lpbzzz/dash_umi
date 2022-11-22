import Logo from '@/pages/Login/Logo';

const getBackgroundPercent = (primaryColor: string, percent: number) => {
  return `linear-gradient(to right, ${primaryColor} 0%,${primaryColor} ${percent}%,white ${percent}%,white 100%)`;
};

const getBackgroundPx = (primaryColor: string, px: number) => {
  return `linear-gradient(to right, ${primaryColor} 0%,${primaryColor} ${px}px,white ${px}px,white 100%)`;
};

import style from './login.less';
import LoginBlock from '@/pages/Login/LoginBlock';

const Login = () => {
  const primaryColor = '#1aebb7';
  const topPercent = 80;
  const bottomPercent = 40;
  const topBgPx =
    (window.innerWidth * (bottomPercent - (100 - topPercent) / 2)) / 100;
  const topBgPercent =
    (topBgPx / ((window.innerWidth * topPercent) / 100)) * 100;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: getBackgroundPercent(primaryColor, bottomPercent),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: `${topPercent}%`,
          height: `${topPercent}%`,
          background: getBackgroundPx(primaryColor, topBgPx),
          boxShadow: '0 0 20px 10px rgba(0,0,0,0.2)',
          borderRadius: '10px',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <div
          className={style.flex}
          style={{ width: `${topBgPercent}%`, height: '100%' }}
        >
          <div
            style={{
              width: '80%',
              height: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Logo />
          </div>
        </div>
        <div style={{ width: `${100 - topBgPercent}%`, height: '100%' }}>
          <div style={{ width: '100%', height: '100%' }}>
            <LoginBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
