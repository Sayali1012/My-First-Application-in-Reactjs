import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
     <header>
     
     Popular cities of the world
     
     <div className="img">
     {/* <img src={process.env.PUBLIC_URL + '/cities.jpg' } alt="Cities"  /> */}
     
     </div>
     </header>
    );
  }
}

export default Header;