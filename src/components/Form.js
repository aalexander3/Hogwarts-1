import React, { Component } from 'react'
import Select from './Select'

export default class Form extends Component {

  state = {
    name: '',
    age: 0,
    role: '',
    house: '',
    image1: '',
    image2: ''
  }

  handleChange = (e) => {
    // get some value from the event and save it to state
    // setState
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // handleSubmit = e => {
  //   when the form is submitted - call on the addCharacter prop and send the character info
  //   console.log(e)
  // }


  render(){
    //  this.props looks like {addCharacter:fn()}
    // character attr: name, age, role, house, image1, image2
    // what makes a form controlled?

    console.log(this.state)
    // when the form is submitted - call on the addCharacter prop and send the character info
    return(
      <div>
        <h1>Add character form</h1>
        <form onChange={this.handleChange} onSubmit={(e) => this.props.addCharacter(this.state, e)} >
          <input type='text' name='name' value={this.state.name} />
          <input type='number' name='age' value={this.state.age} />
          <input type='text' name='role' value={this.state.role} />
          <Select house={this.state.house} handleChange={this.handleChange} />

          <input type='text' name='image1' value={this.state.image1} />
          <input type='text' name='image2' value={this.state.image2} />
          <input type='submit' name='submit' value='Add new character' />
        </form>
      </div>
    )
  }
}
