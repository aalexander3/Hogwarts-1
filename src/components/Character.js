import React from 'react'

import Select from './Select'

class Character extends React.Component {
  state = {
    clicked: false,
    houseClicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  dropHouse = () => {

    // shows the dropdown
    // copy the select code
    // make it so that when that h4 gets clicked -- I can render a Select comp
    // ternary in the render + change state here
    this.setState({
      houseClicked: !this.state.houseClicked
    })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    console.log(this.props)
    // set state -- which state????
    // App's state
    // this function needs the char and the new value
    this.props.handleChange(this.props.character, e.target.value)
  }

  render() {
    return(
      <div>
        {this.props.context === 'characterContainer' ?
        <div>
          <img src={this.props.character.image1} alt="potter"/>
          <h2>name: {this.props.character.name}</h2>
          <h4 onClick={this.dropHouse}>house: {this.props.character.house}</h4>
          { this.state.houseClicked && <Select handleChange={this.handleChange}/> }
        </div>
        :
        <div>
          <img onClick={this.handleClick} src={this.props.character.image2} alt="potter"/>
            {this.state.clicked &&
              <div>
                <h5>name: {this.props.character.name}</h5>
                <h5 onClick={this.dropHouse}>house: {this.props.character.house}</h5>
                <h5>age: {this.props.character.age}</h5>
                <h5>role: {this.props.character.role}</h5>
                { this.state.houseClicked && <Select handleChange={this.handleChange}/> }
              </div>
            }
        </div>
      }
      </div>
    )
  }
}

export default Character
