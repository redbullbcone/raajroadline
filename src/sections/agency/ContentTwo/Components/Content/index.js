import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({title, image,...rest}){
return(
<Card itemCenter={true} {...rest}>
  <div >
  <img src={image} className="image-card-hire"/>
  </div>
  <Card.Title as="h4">{title}</Card.Title>

</Card>
)
}