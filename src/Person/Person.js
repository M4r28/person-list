import React from 'react';

const Person = (props)=>{
  // console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/women/${props.img}.jpg`
  
return (
  <article className="Person">
    <img src={url} alt="our staff member"/>
    <h4>{props.name}</h4>
    <h5>{props.occupation}</h5>
    <p>{props.children}</p>

  </article>
)
}

export default Person;