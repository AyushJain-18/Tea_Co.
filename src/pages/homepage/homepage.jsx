 import React from 'react'
import './homepage.styles.scss';
import HeaderContainer from '../../components/header/Header.container';
import {Link} from 'react-router-dom';

class Homepage extends React.Component {
    componentDidMount(){
       let myIndex = 0;
        carousel();
    
      function carousel() {
        var i;
        var x = document.getElementsByClassName("slide_img");
          for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1} 
          if( x[myIndex-1]){
            x[myIndex-1].style.display = "block";  
          }  
          setTimeout(carousel, 2000); // Change image every 2 seconds
    }
}
      
    render(){
        return (
            <>
            <HeaderContainer/>
<div class="main-layout">
    <section class="slider_section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="full">
                        <h1>Tea Co.</h1>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                   </div>
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3">
                    <div class="full text_align_center">
                        <img class="slide_img" src="images/HeaderImage1.jpg" alt="#" /> 
                        <img class="slide_img" src="images/HeaderImage2.jpg" alt="#" /> 
                        <img class="slide_img" src="images/HeaderImage3.jpg" alt="#" /> 
                        <img class="slide_img" src="images/HeaderImage4.jpg" alt="#" /> 
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div id="about" class="about layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img class="img-responsive" src="images/about_img1.jpg" alt="#" />
                </div>
                <div class="col-md-6">
                    <div class="heading margin_top_30">
                        <h2>About our shop</h2>
                    </div>
                    <div class="full margin_top_20">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="full margin_top_30">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Link to='/product'>
    <div id="OurTeas" class="section dark_bg layout_padding">
        <div  class="container">
            <div class="row">
               <div class="col-md-12">
                    <div class="heading full text_align_center">
                        <h2 class="white_font full text_align_center">Our Teas</h2>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col-md-4 margin_top_30">
                    <div class="full fr">
                        <img class="img-responsive" src="images/Our_Tea1.png" alt="#" />
                    </div>
                    <div class="full text_align_center">
                        <h3 class="white_font">Silver Green Darjeeling Tea <br/><strong class="theme_blue">Rs. 635.00</strong></h3>
                    </div>   
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full fr">
                        <img class="img-responsive" src="images/OurTea2.png" alt="#" />
                    </div>
                    <div class="full text_align_center">
                        <h3 class="white_font">Smoky sDarjeeling Tea<br/><strong class="theme_blue">Rs. 435.00</strong></h3>
                    </div>
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full fr">
                        <img class="img-responsive" src="images/OurTea3.png" alt="#" />
                    </div>
                    <div class="full text_align_center">
                        <h3 class="white_font">First Flush Darjeeling Tea<br/><strong class="theme_blue">Rs. 499.00</strong></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Link>
    <div id="Gifts" class="section">
        <div class="container">
            <div class="row">
                <div class="full main_heading_1">
                    <h2>Gifts And Special offers</h2>
                </div>  
            </div>
            <div class="row">
               <div class="col-md-6 margin_top_30">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloreprehenderin </p> 
                </div>
                <div class="col-md-3"></div>
                <div class="col-md-3 padding_right_0">
                        <img style={{width: '250px'}} src="images/SpecialDiscount.png" alt="#" />
                </div>
            </div>
        </div>
    </div>

    <div id="product" class="section margin_30">
        <div class="container">
            <div class="row">
                <div class="full main_heading_2">
                    <h2> Tea Related Product</h2>
                </div>  
            </div>
            <div class="row margin_bottom_30">
               <div class="col-md-6 ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloreprehenderin </p> 
                </div>
                <div class="col-md-6 padding_right_0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure doloreprehenderin </p> 
                </div>
            </div>
        </div>
    </div>
    <div id="blog" class="section dark_bg layout_padding">
        <div class="container">
            <div class="row">
               <div class="col-md-12">
                    <div class="heading full text_align_center">
                        <h2 class="white_font full text_align_center">Our Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row">
               <div class="col-md-4 margin_top_30">
                    <div class="full" style={{overflow: 'hidden'}}>
                    <div class="full bl">
                        <img class="img-responsive" src="images/blogImage1.jpg" alt="#" />
                    </div>
                    <div class="full blog_blue text_align_center">
                        <h5 class="white_font">Post by David Mark 27/07/2019</h5>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor..</p>
                    </div> 
                     </div>  
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full" style={{overflow: 'hidden'}}>
                    <div class="full bl">
                        <img class="img-responsive" src="images/BlogImage2.jpg" alt="#" />
                    </div> 
                    <div class="full blog_blue text_align_center">
                        <h5 class="white_font">Post by David Mark 27/07/2019</h5>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor..</p>
                    </div>
                     </div>
                </div>
                <div class="col-md-4 margin_top_30">
                    <div class="full" style={{overflow: 'hidden'}}>
                    <div class="full bl">
                        <img class="img-responsive" src="images/BlogImage3.jpg" alt="#" />
                    </div> 
                    <div class="full blog_blue text_align_center">
                        <h5 class="white_font">Post by David Mark 27/07/2019</h5>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniadolor..</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="contact" class="section" style={{padding: '10px 0px'}}>
        <div class="container-fluid">
            <div class="row">
             
                <img style={{padding: '20px'}} class="col-md-6" src="images/ContactUS.jpg" alt="#" />
                
               <div class="col-md-6">
                <div class="heading">
                        <h2>Request a <strong class="theme_blue">Call Back</strong></h2>
                    </div>
                    <div class="full margin_top_20">
                        <form  onsubmit="alert('we have recived your request and rest assured we will call you back')">
                        <div class="row">
                            <div class="col-sm-12">
                               <input class="form-control" placeholder="Your Name" type="text" required=""/>
                            </div>
                            <div class="col-sm-12">
                               <input class="form-control" placeholder="Email" type="Email" required=""/>
                            </div>
                            <div class="col-sm-12">
                                <input class="form-control" placeholder="Phone" type="number" required=""/>
                            </div>
                            <div class="col-sm-12">
                                <textarea class="form-control textarea" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button class="main_bt">Send</button>
                    </form>
                    </div>   
                    
                </div>
                
            </div>
        </div>
    </div>
                {/* <div className="homepage"> // when using noraml scss file
                        <DirectoryMenu/>
            </div> */}
                {/* <HomePageContainer>
                    <DirectoryMenu/>
                </HomePageContainer> */}

        </div>
        </>
        )
    }
}

export default Homepage;