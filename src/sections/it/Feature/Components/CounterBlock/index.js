import React from 'react'
import Counter from './style'
 
export default function CounterBlock({...rest}){
return(
<Counter {...rest}>
    <Counter.Wrapper className="bg-blue-ribbon">
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="image/it-services/our-support-1.svg" /></span></Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Get matched to <br />Suitable Projects by our AI</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="image/it-services/our-support-2.svg" /></span>%</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Get Paid for Every Hour<br /> Use our Time Tracking App</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter"><img src="image/it-services/our-support-3.svg" /></span>+</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Receive quick & secure<br /> Payments in US Dollars</Counter.Text>
    </Counter.Single>
    </Counter.Wrapper>
</Counter>
)
}