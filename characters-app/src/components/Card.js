import { NavLink } from "react-router-dom";

export default function Card({ item, type }){
  return (
    <div class="card">
      <img src={item.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <NavLink to={"/" + type + "/" + item.id} className="link-info">See {type}'s detail <i className="fa fa-external-link"></i></NavLink>              
      </div>
    </div>       
  )
}