import React from "react"
import { useLocation, useNavigate, useParams } from 'react-router-dom'

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
    if (!DataisLoaded) return <div>
      <h5><i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Loading data.. </h5>
    </div>;

    console.log(character);

    return (
      <div>
        <div class="row mb-5">
          <h1>{character.name}'s Detail</h1>
        </div>
        <div class="row">
          <div class="col-md-4">
            <img src={character.image} class="d-block mx-auto mx-md-0" alt={character.name}/>
          </div>
          <div class="col-md-8">
            <dl>
              <dt>Name</dt>
              <dd>{character.name}</dd>
              <dt>Species</dt>
              <dd>{character.species}</dd>
              <dt>Gender</dt>
              <dd>{character.gender}</dd>
              <dt>Status</dt>
              <dd>{character.status}</dd>
              <dt>Origin</dt>
              <dd>{character.origin.name}</dd>
              <dt>Location</dt>
              <dd>{character.location.name}</dd>
              
            </dl>
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