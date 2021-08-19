import React from 'react';



import CardF1 from './CardsF/CardF1';
import CardF2 from './CardsF/CardF2';

import CardF3 from './CardsF/CardF3';

import CardF4 from './CardsF/CardF4';

import CardF5 from './CardsF/CardF5';

import CardF6 from './CardsF/CardF6';

import CardF7 from './CardsF/CardF7';

import CardF8 from './CardsF/CardF8';




const Gallery = () => {
  return (
  <div className="container">
   <pre> <h1 class='tc'><b>Happiness is only real,when Shared!</b></h1></pre>
  
                  <div class="flex justify-center">
                       <div class=" w-200 pv0 mr2 tc bg-navy dib br3 pd4 ma2 grow bw2 shadow-5">
                          <CardF1 />
                        </div>
                        <div class=" w-200 pv0 mr2">
                          <CardF2/>
                         </div>
                  </div>
                    
  </div>
  )
}
export default Gallery;