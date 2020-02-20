import React ,{Component } from 'react';


class Gallery extends Component{

    state = {

      images : []

    }


    componentDidMount(){
          let images = [];
          //let url = 'https://i.picsum.photos/id/100/800/800.jpg'
          for(var i=0 ; i<50 ; i++)
          {
              images.push(`https://i.picsum.photos/id/${i}/1200/500.jpg`);
          }

          this.setState({

              images

          })
          

    }


      render(){

          console.log(this.state.images);

          let imagesList = this.state.images.map((imageurl , index) => {
                  return(
                        <div className = "row" key={index}>
                        
                              <div clasName="col-md mt-3">
                              
                                    <div className = "card mt-2 shadow">
                                    
                                          <img src={imageurl} style={{height : 'auto'}} className="card-img-top" alt="soryy bros"/>
                                          <h3 className="text-center text-success">Surendra Reddy </h3>

                                    </div> 
                              
                              
                              </div>
                        
                        </div>
                  )
          })

          return(
                    
                   <div className = "container">
                        { imagesList }
                   </div>     
                    
          )


      }

}



export default Gallery;