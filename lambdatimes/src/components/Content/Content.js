import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'ALL',
      tabs: [],
      cards: [],
      newTab: true,
    };
    console.log(this.state.cards)
  }
  
  componentDidMount(){
    fetch(tabData, cardData)
    .then(
      this.setState({
        tabs: tabData,
        cards: cardData,
      })
      )
      .catch(err => console.log('noooo'));
  
  
  }
  changeSelected = (ev) => {
    // this function should take in the tab and update the state with the new tab.
    // console.log(tab)
    this.setState({selected: ev.target.innerText.toUpperCase()});
  };
  filterCards = () => {
  console.log(this.state.cards);
  console.log(this.state.selected);
  const filtered =  this.state.cards.filter(card => {
      if(this.state.selected === "ALL"){
        return cardData
      } 
      else if(this.state.selected === card.tab.toUpperCase()){
         return card
      }
  }
  );
  console.log(filtered);
  // this.setState({cards:filtered})

    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selected
      
      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.
    
      Your algorithim for the logic here is as follows: 
        - if the selected tab is 'all' it should return all 
          of the items from cardData. 
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    
    return filtered 
  };

  render() {
    console.log(this.state.cards)
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Carousel/>

        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
