import React from 'react'
import Counter from './style'
 
export default function CounterBlock({...rest}){
return(
<Counter {...rest}>
    <Counter.Wrapper>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="image/it-services/our-support-1.svg" /></span></Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Get matched to <br />Suitable Projects by our AI</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="image/it-services/our-support-2.svg" /></span>%</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Gain Access to Dashboards<br /> & Manage your Projects</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="image/it-services/our-support-3.svg" /></span>+</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Get quick & secure<br /> payments in USD</Counter.Text>
    </Counter.Single>
    </Counter.Wrapper>
</Counter>
)
}