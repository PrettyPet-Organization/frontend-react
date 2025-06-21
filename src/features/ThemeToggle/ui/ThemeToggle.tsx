import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { 
  SunOutlined, 
  MoonOutlined, 
  SettingOutlined,
  CheckOutlined 
} from '@ant-design/icons';
import { useTheme } from '../../../shared/lib/hooks/useTheme';
import type { ThemeType } from '../../../shared/config/theme/palettes';

export const ThemeToggle: React.FC = () => {
  const { currentTheme, isSystemTheme, changeTheme, toggleCurrentTheme, useSystemTheme } = useTheme();

  const items = [
    {
      key: 'light',
      label: 'Светлая тема',
      icon: <SunOutlined />,
      onClick: () => changeTheme('light' as ThemeType),
    },
    {
      key: 'dark',
      label: 'Темная тема',
      icon: <MoonOutlined />,
      onClick: () => changeTheme('dark' as ThemeType),
    },
    {
      key: 'system',
      label: 'Системная тема',
      icon: <SettingOutlined />,
      onClick: useSystemTheme,
    },
  ];

  // Добавляем галочку к активному элементу
  const menuItems = items.map(item => ({
    ...item,
    label: (
      <Space>
        {item.icon}
        {item.label}
        {((item.key === currentTheme && !isSystemTheme) || 
          (item.key === 'system' && isSystemTheme)) && <CheckOutlined />}
      </Space>
    ),
  }));

  return (
    <Dropdown
      menu={{ items: menuItems }}
      placement="bottomRight"
      trigger={['click']}
    >
      <Button
        type="text"
        icon={currentTheme === 'dark' ? <MoonOutlined /> : <SunOutlined />}
        onClick={toggleCurrentTheme}
        className="theme-toggle-btn hover:bg-theme-hover transition-colors"
        size="large"
      />
    </Dropdown>
  );
}; 