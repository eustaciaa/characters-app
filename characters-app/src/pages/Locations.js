import DataTable from 'react-data-table-component';
import React from "react";
import Card from "../components/Card";
import LoadingText from '../components/LoadingText';
import { NavLink } from 'react-router-dom';

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
          <DataTable 
            columns={columns}
            data={locations}
            pagination  
          />
        </div>
      </div>
    )
  }
}

const columns = [
  {
    name: "Name",
    selector: row => row.name,
    sortable: true
  },
  {
    name: "Dimension",
    selector: row => row.dimension,
    sortable: true
  },
  {
    name: "Type",
    selector: row => row.type,
    sortable: true
  },
  {
    name: "Residents",
    cell: row => <NavLink to={"/location/" + row.id} className="link-info">See residents <i className="fa fa-external-link"></i></NavLink>              
  }
]