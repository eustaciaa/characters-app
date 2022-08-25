import React from "react"
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import LoadingText from "../components/LoadingText";

class Character extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      character: null,
      DataisLoaded: false
    }
  }
  
  componentDidMount(){
    // console.log(this.props.params.id);
    let id = this.props.params.id;
    
    fetch('https://rickandmortyapi.com/api/character/' + id)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          character: json,
          DataisLoaded: true
        })
      })
  }
  
  render () {
    // console.log(this.props.id)
    const { DataisLoaded, character } = this.state;
    if (!DataisLoaded) return <LoadingText />

    let characterLocationId = character.location.url.split("/");
    characterLocationId = characterLocationId[characterLocationId.length - 1];

    return (
      <div>
        <div class="row mb-5 text-md-start text-center">
          <h1>{character.name}'s Detail</h1>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img src={character.image} class="d-block mx-auto mx-md-0" alt={character.name}/>
          </div>
          <div class="col-md-8 text-md-start text-center mt-md-0 mt-5">
            <div class="row">
              <div class="col-12 col-md-6">
                <dl>
                  <dt>Name</dt>
                  <dd>{character.name}</dd>
                  <dt>Species</dt>
                  <dd>{character.species}</dd>
                  <dt>Gender</dt>
                  <dd>{character.gender}</dd>
                  <dt>Status</dt>
                  <dd>{character.status}</dd>
                </dl>
              </div>
              <div class="col">
                <dl>           
                  <dt>Origin</dt>
                  <dd>{character.origin.name}</dd>
                  <dt>Location</dt>
                  <dd>
                    <NavLink to={"/location/" + characterLocationId} className="link-info">{character.location.name}<i className="fa fa-external-link"></i></NavLink>
                  </dd>                  
                </dl>
              </div>
            </div>
          </div>
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

export default withRouter(Character) 