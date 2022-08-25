import React from "react";
import Card from "../components/Card";
import LoadingText from "../components/LoadingText";

export default class Characters extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      characters: [],
      DataisLoaded: false
    }
  }
  
  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          characters: json.results,
          DataisLoaded: true
        })
      })
  }
  
  render () {
    const { DataisLoaded, characters } = this.state;
    if (!DataisLoaded) return <LoadingText />

    characters.map((character => (
      console.log(character)
    )))

    return (
      <div class="col">
        <div class="row mb-5 text-center">
          <h1>All Characters</h1>
        </div>
        <div class="row">
          {characters.map((character) => (
            <div class="p-3 col-md-3">
              <Card type="character" item={character}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}