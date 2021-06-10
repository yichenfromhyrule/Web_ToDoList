import React from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { AiOutlineSetting } from "react-icons/ai";
import { 
    BiHomeSmile,
    BiMessageDetail,
    BiFace,
    BiFolder,
    BiLogOut
} from "react-icons/bi";
import { IconContext } from "react-icons";
import "./Navbar.scss";
//import { SidebarContext } from 'react-pro-sidebar/dist/ProSidebar/ProSidebar';

export const Navbar = () => {
    return (
        <div>
            <ProSidebar width="auto">
                <SidebarHeader>
                    <Menu iconShape="circle">
                        <IconContext.Provider
                            value={{ color: 'black', title:'Home' }}
                        >
                            <MenuItem icon={<BiHomeSmile />} />
                        </IconContext.Provider>
                    </Menu>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<BiMessageDetail />} />
                        <MenuItem icon={<BiFace />} />
                        <MenuItem icon={<BiFolder />} />
                        <MenuItem icon={<AiOutlineSetting />} />
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <Menu iconShape="circle">
                        <IconContext.Provider
                            value={{ color: 'black', title:'Home' }}
                        >
                            <MenuItem icon={<BiLogOut />} />
                        </IconContext.Provider>
                    </Menu>
                </SidebarFooter>
            </ProSidebar>
        </div>
    )
}

export default Navbar
