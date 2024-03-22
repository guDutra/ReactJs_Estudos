import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"
export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <FaIcons.FaChartBar  />,
        cName: 'nav-text'
    },
    {
        title: 'Incomes',
        path: '/incomes',
        icon: <FaIcons.FaDollarSign />,
        cName: 'nav-text'
    },
    {
        title: 'Expenses',
        path: '/expenses',
        icon: <FaIcons.FaMoneyCheckAlt />,
        cName: 'nav-text'
    },

    {
        title: 'Alerts',
        path: '/alerts',
        icon: <IoIcons.IoIosWarning  />,
        cName: 'nav-text'
    },
    {
        title: 'Goals',
        path: '/goals',
        icon: <FaIcons.FaBullseye   />,
        cName: 'nav-text'
    },
    {
        title: 'Create',
        path: '/register',
        icon: <IoIcons.IoMdAddCircle />,
        cName: 'nav-text'
    },
]
