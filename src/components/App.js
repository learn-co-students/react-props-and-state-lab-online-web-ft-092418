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

  onChangeType = (newFilter) => {
    this.setState({
        filters: {
            ...this.state.filters,
            type: newFilter.target.value
        }
    })
  }

  onFindPetsClick = () => {
    let url = this.state.filters.type === 'all' ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
    fetch(url)
      .then((resp) => resp.json())
      .then(pets => this.setState({ pets }));
  //Set <App/>'s state.pets with the results of your fetch request so you can pass the pet data down as props to <PetBrowser />
  }

  onAdoptPet = (id) => {
    let pets = [...this.state.pets]
    let pet = pets.find(pet => pet.id === id)
      pet.isAdopted = true
      // pet.isAdopted = !pet.isAdopted if you wanted to toggle false/true. 
      this.setState({ pets })
      //pets: pets
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
