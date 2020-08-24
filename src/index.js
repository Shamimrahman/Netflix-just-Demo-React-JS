import React from 'react';
import ReactDOM from 'react-dom';
import Card from  './Card';
import Sdata from './Sdata'



function fcard(value)
{

  return(

   <Card

imgsrc={ value.imgsrc}
   para={value.para}
   title= {value.title}
   link={value.link}




   />




  )




}
ReactDOM.render(

<>

{Sdata.map(fcard)}


</>,

document.getElementById('root')

)