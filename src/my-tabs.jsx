'use strict';
import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  window.alert(`A tab with this route property ${tab.props.route} was activated.`);
}

const TabsExampleSimple = React.createClass({
  render : () => (
    <Tabs>
      <Tab label="Item One" >
        <div>
          <h2 style={styles.headline}>Tab One Template Example</h2>
          <p>
            This is an example of a tab template!
          </p>
          <p>
            You can put any sort of  or react component in here. It even keeps the component state!
          </p>
          <Slider name="slider0" defaultValue={0.5} />
        </div>
      </Tab>
      <Tab label="Item 2" >
        <div>
          <h2 style={styles.headline}>Tab One Template Example</h2>
          <p>
            This is an example of a tab template!
          </p>
          <p>
            You can put any sort of  or react component in here. It even keeps the component state!
          </p>
          <Slider name="slider0" defaultValue={0.5} />
        </div>
      </Tab>
      <Tab label="Item 3" >
        <div>
          <h2 style={styles.headline}>Tab One Template Example</h2>
          <p>
            This is an example of a tab template!
          </p>
          <p>
            You can put any sort of or react component in here. It even keeps the component state!
          </p>
          <Slider name="slider0" defaultValue={0.5} />
        </div>
      </Tab>
    </Tabs>
  )
});


export default TabsExampleSimple;
