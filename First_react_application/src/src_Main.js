import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom';

class Main extends Component {
  render() {
    return (
     <main>
     <ol>
     <li>
     <Link className="title" exact to="/Blog1">Seoul</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/seoul.jpg' } alt="City"  />
     <p>New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the State of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area.[9] With over 20 million people in its metropolitan statistical area and 23,582,649 in its combined statistical area as of 2020, New York is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, dining, art, fashion, and sports, and is the most photographed city in the world. Home to the headquarters of the United Nations, New York is an important center for international diplomacy,and has sometimes been called the capital of the world. </p>
     </li>

     <li>
     <Link className="title" exact to="/Blog2">London</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/london.jpg' } alt="City"  />
     <p> London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.[9] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains boundaries close to its medieval ones.[note 1][10][11] Since the 19th century,[12] "London" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire,[13] which largely makes up Greater London,[14] the region governed by the Greater London Authority.[note 2][15] The City of Westminster, to the west of the City, has for centuries held the national government and parliament.</p></li>
     
     <li>
     <Link className="title" exact to="/Blog3">New York</Link>
     <p className="title"></p>
     <img src={process.env.PUBLIC_URL + '/newyork.jpg' } alt="City"  />
     <p>New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the United States. Located at the southern tip of the State of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban area.[9] With over 20 million people in its metropolitan statistical area and 23,582,649 in its combined statistical area as of 2020, New York is one of the world's most populous megacities. New York City has been described as the cultural, financial, and media capital of the world, significantly influencing commerce, entertainment, research, technology, education, politics, tourism, dining, art, fashion, and sports, and is the most photographed city in the world. Home to the headquarters of the United Nations, New York is an important center for international diplomacy,and has sometimes been called the capital of the world.</p>
     </li>
     </ol>
     
     </main>
    );
  }
}

export default Main;