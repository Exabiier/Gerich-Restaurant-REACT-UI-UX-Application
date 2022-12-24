import React from 'react';

import './SpecialMenu.css';
import {images, data } from '../../constants'
import { SubHeading, MenuItem } from '../../components'

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Pallatte" />
      <h1 className="headText__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu"
  </div>
);

export default SpecialMenu;
