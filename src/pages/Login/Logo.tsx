import { CodepenOutlined } from '@ant-design/icons';

const Logo = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <CodepenOutlined style={{ fontSize: '140px' }} />
      <span style={{ fontSize: '24px', fontWeight: 900, fontStyle: 'italic' }}>
        Follow Your Heart
      </span>
      <span style={{ fontWeight: 500, fontSize: '16px' }}>
        Do what you want
      </span>
    </div>
  );
};

export default Logo;
