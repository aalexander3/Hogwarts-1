import React from 'react'

const houses = ['Gryffindor', 'Slytherin', 'HufflePuff', 'Ravenclaw']

const Select = props => {

  return (
    <select name='house' value={props.house} onChange={props.handleChange}>
      {houses.map(house => <option value={house}>{house}</option>)}
    </select>
  )
}

export default Select
