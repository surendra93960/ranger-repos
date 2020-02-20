import React,{ Component} from 'react';


export default class Param extends Component{


      state ={

          id : null,
          name : 'surendra'

      }

    componentDidMount(){


        let id = this.props.match.params.post_id;
        console.log(id);

        this.setState({

            id,name : 'suri'

        })        

    }


      render(){
          
          return(

              <div>
              
                    <h1>This is the params Component !!</h1>
                    and parameter is 
                    <h2>{ this.state.id} and {this.state.name}</h2>

              </div>

          )

      }

}