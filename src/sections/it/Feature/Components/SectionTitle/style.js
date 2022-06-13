import styled from 'styled-components'
import { Heading, Box, Paragraph } from '~styled'

const SectionTitle = styled(Box)`

`
SectionTitle.Text = styled(Paragraph)`



`
SectionTitle.Subtitle = styled(Heading)`
    color: #ff5722;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: normal;
    line-height: 28px;
    position: relative;
    display: inline-block;

`
SectionTitle.Main = styled(Heading)`
font-weight: 700;
font-size: 60px !important;
line-height: 54px;
color:#262729;

@media (min-width:768px) {
    font-size: 33px;
}

@media (min-width:1400px) {
    font-size: 45px;
}

`
export default SectionTitle;