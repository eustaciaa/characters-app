import React from "react";
import Card from "../components/Card";

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
    if (!DataisLoaded) return <div class="d-flex justify-content-center">
      <h5><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>Loading data.. </h5>
    </div>;

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
              {/* <div class="card">
                <img src={character.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{character.name}</h5>
                  <NavLink to={"/" + character.id} className="link-info">See character's detail <i className="fa fa-external-link"></i></NavLink>              
                </div>
              </div>               */}
              <Card type="character" item={character}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}