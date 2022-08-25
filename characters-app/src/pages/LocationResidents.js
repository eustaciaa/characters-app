import React from "react";
import LoadingText from "../components/LoadingText";
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Card from "../components/Card";

class LocationResidents extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      locationName: "",
      residents: [],
      DataisLoaded: false,
    }
  }
  
  componentDidMount(){
    let id = this.props.params.id;
    fetch('https://rickandmortyapi.com/api/location/' + id)
      .then((res) => res.json())
      .then((json) => {
        let location = json;

        this.setState({
          locationName: location.name
        });

        if (location.residents.length === 0) {
          this.setState({
            DataisLoaded: true
          })
        }

        let residentFetches = [];

        location.residents.map((residentUrl => (
          residentFetches.push(fetch(residentUrl).then(res => res.json()))
        )))

        Promise.all(residentFetches)
        .then(residents => { 
          this.setState({
            residents: residents,
            DataisLoaded: true
          })
        })
      })
  }
  
  render () {
    const { locationName, residents, DataisLoaded } = this.state;

    if (!DataisLoaded) return <LoadingText />

    return (
      <div class="col">
        <div class="row mb-5 text-center">
          <h1>Characters in {locationName}</h1>
        </div>
        <div class="row">
          {
            residents.length !== 0 ?
            residents.map((resident) => (
              <div class="p-3 col-md-3">
                <Card type="character" item={resident}/>
              </div>
            )) : 
            <div class="d-flex mt-5 justify-content-center" >
              <h6>There isn't any character in {locationName}.</h6>
            </div>
          }
        </div>
      </div>
    )
  }

}

const withRouter = (Component) => (props) => {
  const history = useNavigate();
  const location = useLocation();
  const params = useParams(); 
  return <Component params = {params} history={history} location={location} {...props} />;
};

export default withRouter(LocationResidents) 