'use strict';
import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import Checkbox from 'material-ui/lib/checkbox';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

const TabsExampleSimple = React.createClass({
  render: () => (
    <Tabs>
      <Tab label="Item One">
        <div>
          <h2 style={styles.headline}>Tab One Template Example</h2>
          <p>
            This is the first tab.
          </p>
          <p>
            This is to demonstrate how easy it is to build mobile apps with react
          </p>
          <Slider name="slider0" defaultValue={0.5}/>
        </div>
      </Tab>
      <Tab label="Item 2">
        <div>
          <h2 style={styles.headline}>Tab Two Template Example</h2>
          <p>
            This is the second tab
          </p>
          <Checkbox name="checkboxName1" value="checkboxValue1" label="Installed Cordova"/>
          <Checkbox name="checkboxName2" value="checkboxValue2" label="Installed React"/>
          <Checkbox name="checkboxName3" value="checkboxValue3" label="Built the app"/>
        </div>
      </Tab>
      <Tab label="Item 3">
        <div>
          <h2 style={styles.headline}>Tab Three Template Example</h2>
          <p> Choose a Date:</p>
          <DatePicker hintText="Select date"/>
        </div>
      </Tab>
    </Tabs>
  )
});

export default TabsExampleSimple;
