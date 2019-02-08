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

  fetchGetHelper = (url,callback) => {
    fetch(url,{
      method: "GET",
      headers:{
        contentType: 'application/json; charset=utf-8',
      }
    }).then(resp => resp.json().then(callback))
  }

  onChangeType = event => {
    this.setState({filters: {
      type: event.target.value
    }})
  }

  setStatePets = data => {
    console.log(data)
    this.setState({
    })
  }

  onFindPetsClick = event => {
    const type = this.state.filters.type
    switch (type) {
      case "all":
        this.fetchGetHelper("api/pets", this.setStatePets());
        break
      case "cat":
        this.fetchGetHelper("api/pets?type=cat", this.setStatePets());
        break
      case "dog":
        this.fetchGetHelper("api/pets?type=dog", this.setStatePets());
        break
      case "micropig":
        this.fetchGetHelper("api/pets?type=micropig", this.setStatePets());
        break
    }
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
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
