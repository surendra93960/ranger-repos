import React,{ Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

export default class extends Component{


    

      render(){
          
            return(
                
              <div>
                      <h1>THis is a Home component </h1>
                      <Gallery />
              </div>


            )

      }

}
