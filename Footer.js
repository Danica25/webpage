import React from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import CopyrightIcon from '@material-ui/icons/Copyright';
function Footer() {
    return (
    

      
            <Container fluid>
              
        <div class="bg">
            
            <Row><Col>
            <img alt=" "class="zaimg"src="http://www.guesswork.co/custom/logo/zaloracom.png"/>
            <div class="ft1">
            As Asia’s Online Fashion Destination, we create endless 
            <br/>style possibilities through an ever-expanding range of
            <br/> products form the most coveted international and local
            <br/> brands, putting you at the centre of it all.<br/><strong style={{'color':'rgb(110,107,107'},{'fontWeight':"bolder"}} >With ZALORA, 
            You Own Now.</strong></div></Col>
       
       <Col>
       <div class="cus">CUSTOMER SERVICE</div>
       <div class="opt">
      <ul> <a href="#">
  
     Contact Us</a>
  </ul>
  <ul><a href="#">
    FQA</a>
  </ul>
  <ul><a href="#">
    Voucher Terms&Conditions</a>
  </ul>
  
    <ul><a href="#">Size Guide</a>
  </ul>
  
    <ul><a href="#">Product Index</a></ul>
  
  <ul  ><a href="#">
    Fashion Glossary</a>
  </ul>
  <ul ><a href="#">
    Track Order</a>
  </ul></div>
</Col><Col>
  <div class="cus1">ABOUT US</div><div class="opt1">
       
       <ul>
  
    <a  href="#">Careers</a>
  </ul>
  <ul>
    <a  href="#">Press/Media</a>
  </ul>
  <ul>
    <a  href="#">Terms & Conditions</a>
  </ul>
  <ul>
    <a  href="#">Privacy Policy</a>
  </ul>
  <ul>
    <a href="#">Sustainability Strategy</a>
  </ul>
  <ul >
    <a href="#">The Affiliate Program</a>
  </ul>
  <ul >
    <a href="#">Influencer</a>
  </ul>
  <ul ><a href="#">
    Sell With Us</a>
  </ul>
  <ul >
    <a href="#">Advertise with Us</a>
  </ul>
  <ul >
    <a href="#">Trend Report 2020</a>
  </ul>
  <ul >
    <a href="#">Responsible Disclosure</a>
  </ul>
  <ul >
    <a href="#">Promotions</a>
  </ul></div>
  </Col>
  
  <Col>
  <div class="cus2"><b style={{'fontSize':"45px"},{'margin-right':'-50%'}}>NEW TO ZALORA?</b><br/>
  <br/>Get a <b style={{'color':"yellow"} }>RM 35 VOUCHER </b>(plus the latest fashion news and <br/>
  product launches) just by subscribing to our newsletter.<br/><br/><br/>Your email address</div>
      
      <div class="mail">
      <Form>
  <Form.Group controlId="formBasicEmail">
   
    <Form.Control class="bd" style={{'width':"10%"},{'margin-left':"0%"}}type="email" placeholder="someone @example.com" />

  </Form.Group></Form>
          </div>
          
          </Col>
          <Col>
          <button class="button button5">FOR WOMEN</button>
          <button class="button1 button6">FOR MEN</button></Col>
          </Row><Row>
            <Col>
            <div class="find"><b style={{'fontSize':"20px"}}>FIND US ON</b></div>
          
          <div class="face"></div>

          </Col>
        <Col>
          <div class="down"><b style={{'fontSize':"20px"}}>DOWNLOAD OUR APP NOW</b></div></Col></Row>

          <Row>
            <Col>
            <div class="face"><FacebookIcon/></div></Col>
            <Col><div class="insta"><InstagramIcon/></div></Col>
          <Col><div class="you"><YouTubeIcon/></div></Col>
          <Col><div class="twi"><TwitterIcon/></div></Col>
          <Col><div class="rss"><PinterestIcon/></div></Col>
          <Col><div class="linkedin"><LinkedInIcon/></div></Col>
          <Col ><div class="gool"><img style={{'height':"30px"}}alt=" "src="https://style.anu.edu.au/_anu/images/icons/icon-google-play-small.png"/></div>
          </Col><Col >
          <div class="apple"><img style={{'height':"30px"}} alt=" "src="https://justlogin.com/wp-content/uploads/2020/11/download-app-store.png"/></div>
          </Col><Col>
          <div class="gall"><img style={{'height':"30px"}}alt=" "src="https://uspto.report/TM/79284619/mark"/></div>         
          
          
          </Col></Row>
          <Row><Col>
          <div class="last">Any questions?Let us help you.<br/>Contact |  Help</div></Col>
          <Col>
          <div class="last1">About | Privacy | Terms of Service<br/></div><div class="copy" ><CopyrightIcon/>2012,2020 Zalora</div></Col></Row>
          
               </div>
               </Container>
    
    )
}

export default Footer
