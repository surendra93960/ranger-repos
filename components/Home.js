import React,{ Component } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

export default class extends Component{

      render(){
          
            return(
                
              <div className="container">
                      <h1 className="text-center bg-primary text-white mt-5 p-2">Ranger Repos !!</h1>
                      <Gallery />
              </div>


            )

      }

}
