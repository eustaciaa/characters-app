export default function Card(item){
  return (
    <div class="card col-md-3">
      <img src="" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>    
  )
}