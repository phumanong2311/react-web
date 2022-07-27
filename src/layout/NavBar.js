import { Burger } from '@mantine/core';
import { useState } from 'react';
import NavItem from './NavItem';
import NavMenu from './NavMenu';

export const NavBar = () => {

  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <nav className='z-10 fixed top-0 inset-x-0 h-[63px] sm:h-[79px] border-b nav inline-flex items-center drop-shadow-sm'>

        <div className='breakpoints-default mx-auto w-full h-full inline-flex px-4 lg:px-8 justify-between items-center relative '>
          <span className='select-none cursor-pointer font-bold text-2xl md:text-2xl lg:text-3xl'>
            Valorant wiki
          </span>
          <NavMenu>
            <NavItem to='/' label='Agents' />
            <NavItem to='/weapons' label='Weapons' />
            <NavItem to='/about' label='About' />
          </NavMenu>
        </div>
      </nav>
      <div className=''>
        <></>
        {/* <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          title={title}
        /> */}
      </div>
      </>
  )
}