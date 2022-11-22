import LoginForm from '@/pages/Login/LoginForm';

const LoginBlock = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'flex-end',
          fontWeight: 600,
        }}
      >
        Need Help?
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontSize: '22px', fontWeight: 800 }}>登录</div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginBlock;
