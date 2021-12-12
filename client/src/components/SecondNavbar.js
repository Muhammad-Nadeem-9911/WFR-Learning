import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

function SecondNavbar() {
  const [sidebar, setSidebar] = useState(true);

  

  return (
    <>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  
                  <a href={item.path} target="_blank">
                  {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        
          
    </>
  );
}

export default SecondNavbar;