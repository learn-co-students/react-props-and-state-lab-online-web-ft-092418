import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  render() {
    const petCards = this.props.pets.map(petData => (
      <Pet onAdoptPet={this.props.onAdoptPet} pet={petData}/>))


    return <div className="ui cards">
      {petCards}
      </div>
  }
}

export default PetBrowser
