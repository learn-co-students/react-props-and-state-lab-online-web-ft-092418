import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }    
  }

  onChangeType = newType => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: newType
      }
    });
  }

  findPets = () => {
    let route = '/api/pets';

    if (this.state.filters.type !== 'all') {      
      route += `?type=${this.state.filters.type}`;
    }
    fetch(route)
      .then(response => response.json())
      .then(pets => this.setState({ pets }));
  }

  onAdoptPet = pid => {
    const pets = this.state.pets.map(pet => {
      return pet.id === pid ? { ...pet, isAdopted: true } : pet;
    });
    this.setState({ pets });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">            
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
