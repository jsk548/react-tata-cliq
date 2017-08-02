import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
//const shop = require('assets/images/shop.svg');

/*function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}*/
const myStyles = {
  tabsContain: {
    'position': 'fixed',
    'bottom' : '0',
    'left' : '0',
    'border' : '1px solid #a9133d',
  },
  inks : {
    'display' : 'none',
  },
  tab1: {
    'background-color' : '#FFFFFF',
  },
  tab2: {
    'background-color' : '#a9133d',
  } 
};

//const elementColor = <img src={shop} />;

function PDPTabs(props) { 
  return (
  <Tabs tabItemContainerStyle={myStyles.tabsContain} inkBarStyle={myStyles.inks}>
    <Tab buttonStyle={myStyles.tab1} onClick={props.myBagFunc} />
    <Tab label="BUY NOW" buttonStyle={myStyles.tab2} onClick={props.myDialog}/>
  </Tabs>
);
}

export default PDPTabs;