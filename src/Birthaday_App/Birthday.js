import React from 'react'
import '../App.css'



function Birthday({person}) {
  return (
    <div className="card w-50">
  <div className="card-body">
    <h5 className="card-title">{person.name}</h5>
    <p className="card-text">{person.age}</p>
    <a href="#" className="btn btn-primary btn-Succes">Wish!</a>
  </div>
</div>
  )
}

export default Birthday