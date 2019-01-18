import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselPics: [],
      counter: 0,
    }
  }
  componentDidMount(){
    fetch(carouselData)
    .then(
      this.setState({
        carouselPics: carouselData,
        currentImg: carouselData[this.state.counter],
      })
      )
      .catch(err => console.log('noooo'));
  }

  leftClick = () => {
    this.state.counter === 0
      ? this.setState({counter: 3})
      : this.setState({ counter: this.state.counter - 1 }) 
  }

  rightClick = () => {
    this.state.counter === 3
      ? this.setState({counter: 0})
      : this.setState({ counter: this.state.counter + 1 })   
  }

  selectedImage = () => {
    console.log('rendering')
    return <img src={this.state.carouselPics[this.state.counter]} style={{display: 'block'}} />
  }
  
  render(){
    console.log(this.state.counter.State);
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

