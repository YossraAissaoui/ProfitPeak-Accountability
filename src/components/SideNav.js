import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faCoins, faClipboardList, faPoll, faCog, faLayerGroup, faQrcode} from '@fortawesome/free-solid-svg-icons';
import './SideNav.css'; 

const SideNav = () => {
  // Define state variables
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // Define state variables for submenu visibility
  const [showSettingsSubmenu, setShowSettingsSubmenu] = useState(false);
  
  //const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Event handlers
  //const handleNavbarHover = () => {
  //  setIsNavbarOpen(true); };
  //const handleNavbarLeave = () => {
  //  setIsNavbarOpen(false);};

  //sidebare
  const handleSidebarHover = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarLeave = () => {
    setIsSidebarOpen(false);
    setShowSettingsSubmenu(false); // Hide dashboard submenu

  };

  // Event handler to toggle dashboard submenu visibility
  const toggleSettingsSubmenu = () => {
    setShowSettingsSubmenu(!showSettingsSubmenu);
  };


  return (
    <>
    
      {/* sidebar */}
      <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`} onMouseEnter={handleSidebarHover} onMouseLeave={handleSidebarLeave}>
        {/* Logo */}
        <div className="logo_item">
          <img src="./profitpeaklogo.png" alt="Logo"/>
          
        </div>
        {/* Menu Content */}
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dahsboard"></div>
            {/* Add or remove menu items as needed */}
            {/* 0 Dashboard: */}
            <li className="item">
              <Link to="/" className="nav_link submenu_item">
                <span className="navlink_icon"><FontAwesomeIcon icon={faQrcode}/></span><span className="navlink">Dashboard </span>
              </Link>
            </li>
            {/* 1 Inventory: */}
            <li className="item">
              <Link to="inventory" className="nav_link submenu_item">
                <span className="navlink_icon"><FontAwesomeIcon icon={faLayerGroup}/></span>
                <span className="navlink">Inventory </span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </Link>
            </li>
            {/* 2 Product Pricing: */}
            <li className="item">
              <Link to="productpricing" className="nav_link submenu_item">
                <span className="navlink_icon"><FontAwesomeIcon icon={faCoins}/></span>
                <span className="navlink">Product Pricing  </span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </Link>
            </li>
            {/* 3 To-do list: */}
            <li className="item">
              <Link to="todolist" className="nav_link submenu_item">
                <span className="navlink_icon"><FontAwesomeIcon icon={faClipboardList}/></span>
                <span className="navlink">To-do list </span>
              </Link>
            </li>
            {/* 4 Reports: */}
            <li className="item">
              <Link to="reports" className="nav_link submenu_item">
                <span className="navlink_icon" ><FontAwesomeIcon icon={faPoll}/></span>
                <span className="navlink">Reports </span>
                <i className="bx bx-chevron-right arrow-left"></i>
              </Link>
            </li>
            {/* 5 Settings: */}
            <li className="item">

             <Link to="settings" className={`nav_link submenu_item ${showSettingsSubmenu ? 'show_submenu' : ''}`} onClick={toggleSettingsSubmenu}>
                <span className="navlink_icon"><FontAwesomeIcon icon={faCog} /></span>
                <span className="navlink">Settings </span>
                <i className="bx bx-chevron-right arrow-left" >
                <FontAwesomeIcon icon={faChevronRight} />
                </i>
              </Link>
              {/* <ul className="menu_items submenu">*/} 
              <ul className={`submenu ${showSettingsSubmenu ? 'show_submenu' : ''}`}>
                  <li className="sublink">Profil </li >
                  <li className="sublink">Logout </li >
            
              </ul >
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideNav;
