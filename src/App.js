import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

// este metodo se ejecutara justo despues de que el componente sea montado 
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        items: data
      })
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <ul>
          {  this.state.items.map((p,i) => ( 
            <li key={p.id}>
               <div>
                  name- email: {p.name} + {p.email}
               </div>
            </li> 
            )
          )  
        }
        </ul>
      </div>
    );
  }
}

export default App;
