import React from 'react';
import './index.css'


function Card(props){

return(

    <>
<div className='cards'>

<div className='card'>

<img src={props.imgsrc} alt="img" className="img-style"></img>

<div className="card-info">

<p>{props.para}</p>

<span></span>

<h1>{props.title}</h1>



<a href={props.link}>

<button>Watch Now</button>


</a>
   
</div>


</div>


</div>





    </>

)


}

export default Card;