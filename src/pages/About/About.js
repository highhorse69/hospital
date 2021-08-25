import React from 'react'
import CardA from './ProfileCard/CardA';
import CardB from './ProfileCard//CardB';
import CardC from './ProfileCard/CardC';
import CardD from './ProfileCard//CardD';
import CardE from './ProfileCard//CardE';
import CardF from './ProfileCard//CardF';
import CardG from './ProfileCard//CardG';
import CardH from './ProfileCard/CardH';


const About = () => {
  return (
      <div>
        
         <div class="flex justify-center">
                       <div class=" w-200 pv0 mr2 tc bg-navy dib br3 pd4 ma2 grow bw2 shadow-5">
                          <CardC/>
                        </div>
                        <div class=" w-200 pv0 mr2">
                          <CardD/>
                         </div>
                  </div>
                    <div class="flex justify-center">
                       <div class=" w-200 pv0 mr2 tc bg-navy dib br3 pd4 ma2 grow bw2 shadow-5">
                          <CardB />
                        </div>
                        <div class=" w-200 pv0 mr2">
                          <CardA/>
                         </div>
                  </div>

                  <pre><h1 class='tc'><b>Our Resource Person</b></h1></pre>

                   <div class="flex justify-center">
                       <div class=" w-200 pv0 mr2 tc bg-navy dib br3 pd4 ma2 grow bw2 shadow-5">
                          <CardE />
                        </div>
                        <div class=" w-200 pv0 mr2">
                          <CardF/>
                         </div>


                  </div>


                  <div class="flex justify-center">
                       <div class=" w-200 pv0 mr2 tc bg-navy dib br3 pd4 ma2 grow bw2 shadow-5">
                          <CardH />
                        </div>
                        <div class=" w-200 pv0 mr2">
                          <CardG/>
                         </div>
                  </div>
        </div>
      
 
  )
}
export default About;