import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
      
    <div
      className={props.selectedTab === props.tab.toUpperCase() ? "tab active-tab" : "tab"}
      onClick={(ev) => {
          props.selectTabHandler(ev)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes={
  tab:PropTypes.string,
  selectTabHandler: PropTypes.function,
  selectedTab: PropTypes.string
}


export default Tab;
