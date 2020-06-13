import React from 'react';

const Person = (props)=>{
  // console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/women/${props.img}.jpg`
  
return (
  <article className="Person">
    <img src={url} alt="our staff member"/>
    <h3>Name: {props.name}</h3>
    <h4>Occupation: {props.occupation}</h4>
    <p>{props.children}</p>

  </article>
)
}

export default Person;