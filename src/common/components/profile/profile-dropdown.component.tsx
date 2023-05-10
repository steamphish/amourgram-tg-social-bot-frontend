import { FC } from 'react';
import { Avatar, Dropdown, MenuProps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface ProfileDropdownProps {
  username: string;
  onLogout: () => void;
}

const ProfileDropdown: FC<ProfileDropdownProps> = ({ username, onLogout }) => {
  const items: MenuProps['items'] = [
    {
      key: 'settings',
      label: <Link to="/">Settings</Link>,
    },
    {
      key: 'logout',
      label: <Link to="/">Logout</Link>,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Avatar size={32} style={{ backgroundColor: '#87d068', cursor: 'pointer' }} icon={<UserOutlined />}>
        {username.charAt(0).toUpperCase()}
      </Avatar>
    </Dropdown>
  );
};

export default ProfileDropdown;
