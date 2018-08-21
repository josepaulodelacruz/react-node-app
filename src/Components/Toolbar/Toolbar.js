import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div>
        	<DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        <div className="toolbar__logo"><a href="/">APP NAME</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/">Wan</a></li>
                <li><a href="/">Too</a></li>
                <li><a href="/">phree</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;