import React ,{Component } from 'react';
import Post from './Post';

class Gallery extends Component{

    state = {

      images : []

    }


    componentDidMount(){
          let images = [];
          //let url = 'https://i.picsum.photos/id/100/800/800.jpg'
          for(var i=0 ; i<50 ; i++)
          {
              images.push(`https://i.picsum.photos/id/${i}/400/400.jpg`);
          }

          this.setState({

              images

          })
          

    }


      render(){

          console.log(this.state.images);

          let imagesList = this.state.images.map((imageurl , index) => {

                  return <Post key = {index} imageurl={imageurl}/>
          })

          return(
                    
                   <div className = "container">
                          <div className = "row">
                              { imagesList }
                           </div>
                   </div>     
                    
          )


      }

}



export default Gallery;