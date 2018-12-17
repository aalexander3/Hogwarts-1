import React, { Component } from 'react';
import './App.css';

import CharacterContainer from './container/CharacterContainer'
import HouseContainer from './container/HouseContainer'
import Form from './components/Form'


class App extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/potter_stuff')
    .then(res => res.json())
    .then(this.setCharacters)
  }

  setCharacters = (characters) => {
    this.setState({characters})
  }

  addCharacter = (character, e) => {
    e.preventDefault()
    console.log(character)
    // great practice here!
    // fetch('http://localhost:3001/potter_stuff', {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(character)
    // })
    // .then(res => res.json())
    // .then(console.log)

    // take the character add it to state

    // want to add the new character to the end of an array
    this.setState({
      characters: [...this.state.characters, character] // must stay an array
    })
  }

  handleChange = (character, newHouse) => {
    console.log(character, newHouse)
    // what do we do here?
  }

  render() {
    return (
      <div>
        <CharacterContainer characters={this.state.characters} handleChange={this.handleChange}/>
        <Form addCharacter={this.addCharacter} />
        <HouseContainer characters={this.state.characters}/>
      </div>
    );
  }
}

export default App;
