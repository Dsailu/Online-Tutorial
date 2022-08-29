import React from 'react'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from 'react-icons/io';
// import { icons } from 'react-icons/lib';

export const Sidebar = [ 
    {
        title: 'Home',
        path:'/',
        icons: <AiIcons.AiFillHome/>,
        cName: 'nav-text'

    },
    {
        title: 'My Courses',
        path:'/',
        icons: <IoIcons.IoIosAddCircle/>,
        cName: 'nav-text'  
    },
    {
        title: 'My Profile',
        path:'/',
        icons: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    }
]