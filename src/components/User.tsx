import React, { useState } from 'react'
import { CaretDownOutlined, CaretUpOutlined, FileTextOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <Link href="user">Profile</Link>,
  },
  { type: "divider" },
  {
    key: "2",
    icon: <SettingOutlined />,
    label: "Setting",
  },
  {
    key: "3",
    icon: <FileTextOutlined />,
    label: "Terms and Conditions",
  },
  {
    key: "4",
    icon: <MessageOutlined />,
    label: "Help & Support",
  },
  { type: "divider" },
  {
    key: "5",
    danger: true,
    label: "Logout",
  },
];


const User = () => {

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Dropdown overlayStyle={{

    }} menu={{ items }} >
      <div className='flex gap-4 items-center'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>Username</span>
        <div className='w-10 h-10 border-2 object-cover overflow-hidden object-center border-primary rounded-full'>
          <Image width={40} height={40} quality={100} className='' src="/images/char1.png" alt="profile" />
        </div>
        {isHover ? (
          <CaretUpOutlined />
        ) : (
          <CaretDownOutlined />
        )}
      </div>
    </Dropdown>
  )
}

export default User
