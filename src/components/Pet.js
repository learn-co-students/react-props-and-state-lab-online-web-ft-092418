import React from 'react'

class Pet extends React.Component {
  render() {
    const pet = this.props.pet
    let adoptButton;
    if (pet.isAdopted) {
      adoptButton = <button className="ui disabled button">Already adopted</button>
    } else {
      adoptButton = <button className="ui primary button" onClick={() => this.props.onAdoptPet(pet.id)}>Adopt pet</button>
    }
    return (

      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === "male" ? "♂" : "♀"}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {adoptButton}
        </div>
      </div>
    )
  }
}

export default Pet
