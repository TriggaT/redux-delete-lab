import React, { Component } from 'react';

class Band extends Component {

  handleClick = e => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
       <li key={this.props.band.id}>{this.props.band.name} <button onClick={this.handleClick}>x</button> </li> 
      </div>
    );
  }
};

export default Band;
