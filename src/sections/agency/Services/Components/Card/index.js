import React from 'react'
import { Link } from '~components'
import Card from './style'
export default function ServicesCard({icon,title,title2, image, text,to,Button,iconBackground,...rest}){
return(
<Card itemCenter={true} backgroundColor="#fff" {...rest}>
  <Card.Icon as="div" background={iconBackground} >
    {/* <i className={icon} />
     */}
     <img src={image} />
  </Card.Icon>
  {/* <Card.Image>
    <img src={image} />
  </Card.Image> */}
  <Card.Title as="h4">{title}<br />{title2}</Card.Title>
  {/* <Card.Text >{text}</Card.Text> */}
  
</Card>

)
}
