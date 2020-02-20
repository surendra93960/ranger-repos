import React from 'react';



export default ({imageurl})=>{

      return(
          <div className="col-md-6 col-lg-4 col-sm-12 mt-3">

                    <div className="card mt-2 shadow">

                      <img src={imageurl} style={{height : 'auto'}} className="card-img-top" />
                      <h4 className="text-center text-success"> Surendra Reddy</h4>

                    </div>
          </div>
      )

}