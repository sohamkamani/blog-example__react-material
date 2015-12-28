'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import MyTabs from './my-tabs.jsx';

const AppBarExampleIcon = () => (
  <AppBar
    title="My App"
    
  />
);

let App = React.createClass({
  render : function(){
    return (
      <div>
        <AppBarExampleIcon />
        <MyTabs />
      </div>
    );
  }
});

module.exports = App;
