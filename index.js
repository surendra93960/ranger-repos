import React, { Component } from 'react';
import { render } from 'react-dom';
import HomeComponent from './components/Home';
import AboutComponent from './components/About';
import ContactComponent from './components/Contact';
import NavbarComponent from './components/Navbar';
import ParamComponent from './components/Param'
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import NotFoundComponent from './components/NotFound';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  
   


  render() {
    return (
      <div>
        <Router>
        <NavbarComponent />
            

            <Switch>

                      <Route exact path="/" component ={HomeComponent}  />
                      <Route path = "/about" component = { AboutComponent} />
                      <Route path= "/contact" component = { ContactComponent } />
                      <Route path='/:post_id' component = { ParamComponent }/>
                      <Route component = { NotFoundComponent } />
                
            
            </Switch>

        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
