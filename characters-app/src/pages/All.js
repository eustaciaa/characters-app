import React from "react";
import { NavLink } from "react-router-dom";

export default class All extends React.Component {

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
    if (!DataisLoaded) return <div>
      <h5><i class="fa fa-spinner fa-spin" aria-hidden="true"></i>Loading data.. </h5>
    </div>;

    characters.map((character => (
      console.log(character)
    )))

    return (
      <div class="col">
        <div class="row mb-2">
          <h2>All Characters</h2>
        </div>
        <div class="row">
          {characters.map((character) => (
            <div class="p-3 col-md-3">
              <div class="card">
                <img src={character.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{character.name}</h5>
                  {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                  <NavLink to={"/" + character.id} className="link-info">See character's detail <i className="fa fa-external-link"></i></NavLink>
                  {/* <a href="#" class="link-info">See character's detail <i className="fa fa-external-link"></i></a> */}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    )
  }
}
   
// export default All;

// export default function All(){
//   return(
//     <h1>Episodes</h1>
//   )
// }