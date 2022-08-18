import React, { useState } from 'react';
import { Row, Col, Layout, Drawer, Button, Space, Radio  } from 'antd';
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";
import { DatePicker } from 'antd';
import "./navbar.css";


const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const Menu = ()=> (
    <ul className="navbar__menu">
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#service">Service</a></li>
      <li><a href="#portfolio">Porfolio</a></li>
      <li><a href="blog">Blog</a></li>
      <li><a href="contact">Contact</a></li>
    </ul>
  )
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar__container">
          <a id="logo" href="/">SmartSpace</a>
            <AlignRightOutlined className="navbar__burger" onClick={showDrawer}/>
          <div className="navbar__menu__large-devices">
            <Menu />
          </div>
        </div>
      </div>
      <Drawer
        placement="right"
        width="75%"
        onClose={onClose}
        visible={visible}
      >
      <div className="navbar__menu__small-devices">
        <Menu />
      </div>
      </Drawer>
    </div>
  )
}

export default Navbar
