import DataTable from 'react-data-table-component';
import React from "react";
import Card from "../components/Card";
import LoadingText from '../components/LoadingText';

export default class Locations extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      locations: [],
      DataisLoaded: false
    }
  }
  
  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/location')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          locations: json.results,
          DataisLoaded: true
        })
      })
  }
  
  render () {
    const { DataisLoaded, locations } = this.state;
    if (!DataisLoaded) return <LoadingText />

    locations.map((location => (
      console.log(location)
    )))

    return (
      <div class="col">
        <div class="row mb-5 text-center">
          <h1>All Locations</h1>
        </div>
        <div class="row">
          {locations.map((location) => (
            <div class="p-3 col-md-3">
              {/* <div class="card">
                <img src={character.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{character.name}</h5>
                  <NavLink to={"/" + character.id} className="link-info">See character's detail <i className="fa fa-external-link"></i></NavLink>              
                </div>
              </div>               */}
              {/* <Card type="character" item={character}/> */}
            </div>
          ))}
        </div>
      </div>
    )
  }
}