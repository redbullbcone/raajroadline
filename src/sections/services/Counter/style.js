import styled from 'styled-components';
import { Box, Heading,Button,Paragraph } from '~styled';

const Counter = styled(Box)`

@media (min-width: 768px){
}

@media (min-width: 1024px){
    padding-bottom: 111px;
s}
.get-started-heading{
  text-align:left;
  margin-top:50px;
  padding-left: 118px;
  padding-top:100px;
  font-size:48px;
}
.counter-para{
  font-weight: 500;
  font-size: 21px;
  line-height: 30px;
  color: black;
  text-align: left;
  padding-top: 45px;
}
.get-started-sec{
  flex-direction: column;
}
.counter-icons{
  width: 75.28px;
height: 72.69px;
}

`
Counter.Single=styled(Box).attrs({className:"counter-single"})`
margin-bottom: 30px;
flex-direction: column;

@media (min-width: 1024px){
  margin-bottom: 0;
}

`
Counter.Block = styled(Box)`

`

Counter.Title = styled(Heading)`
font-size: 48px;
font-weight: 500;
letter-spacing: -1px;
line-height: 1.13461;
margin-bottom: 25px;

@media (min-width: 76px){
  font-size: 42px;
}

@media (min-width: 1024px){
  font-size: 48px;
}

`
Counter.Text = styled(Paragraph)`
font-size: 16px;
font-weight: 400;
letter-spacing: normal;
line-height: 1.5;
color:inherit;


  padding-top:50px;


@media (min-width: 768px){
  font-size: 21px;
}

@media (min-width: 1024px){
  font-size: 24px;
}

@media(max-width: 375px){
  img{
    width: 165px;
  }
}
`

Counter.Box = styled(Box)``


export default Counter;