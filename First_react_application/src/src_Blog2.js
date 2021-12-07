import React, { Component } from 'react';

class Blog2 extends Component {
  render() {
    return (
    
    <main>
    <h1><center>London</center></h1>
    <center><img className="blog" src={process.env.PUBLIC_URL + '/london.gif' } alt="london"  /></center>

    <p>
    London, as one of the world's global cities,exerts strong influence on its arts, commerce, education, entertainment,
     fashion, finance, health care, media, tourism and communications.Its GDP (€801.66 billion in 2017) makes it the biggest
      urban economy in Europeand one of the major financial centres in the world. In 2019 it had the second highest number of
       ultra high-net-worth individuals in Europe after Parisand the second-highest number of billionaires of any city in Europe
        after Moscow. With Europe's largest concentration of higher education institutions,it includes Imperial College London
         in natural and applied sciences, the London School of Economics in social sciences, and the comprehensive University College
          London. The city is home to the most 5-star hotels of any city in the world. In 2012, London became the first city to host
           three Summer Olympic Games.London's diverse cultures mean over 300 languages are spoken.The mid-2018 population of Greater
            London of about 9 million,made it Europe's third-most populous city.It accounts for 13.4 per cent of the UK population.
             Greater London Built-up Area is the fourth most populous in Europe, after Istanbul, Moscow and Paris, with 9,787,426
              inhabitants at the 2011 census. The London metropolitan area is the third-most populous in Europe after Istanbul's and
               Moscow's, with 14,040,163 inhabitants in 2016. London has four World Heritage Sites: the Tower of London; Kew Gardens;
                the Palace of Westminster, along with Westminster Abbey, and St Margaret's Church; and the historic settlement in Greenwich,
                 where the Royal Observatory, Greenwich defines the Prime Meridian (0° longitude) and Greenwich Mean Time. Other landmarks include
                  Buckingham Palace, the London Eye, Piccadilly Circus, St Paul's Cathedral, Tower Bridge and Trafalgar Square. It has numerous museums,
                   galleries, libraries and sporting venues, including the British Museum, National Gallery, Natural History Museum, Tate Modern, British Library
                    and West End theatres.The London Underground is the oldest rapid transit system in the world.
      
      </p>
    
    </main>
    );
  }
}

export default Blog2;