import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { 
        name: 'Max', 
        age: 28
      },
      { 
        name: 'Manu', 
        age: 29
      },
      { 
        name: 'Stephanie', 
        age: 26
      }
    ]
  }
  switchNameHandler = (newName) => {
    console.log('was clicked');
    this.setState({
      persons: [{
          name: newName,
          age: 28
        },
        {
          name: 'Manu',
          age: 29
        },
        {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This really works!</p>
        <button onClick={() => this.switchNameHandler('Maxamillian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person 
          click = {this.switchNameHandler.bind(this, 'Max!')}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>My Hbbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
