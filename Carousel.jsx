import React  from "react"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from 'react'
import pune from '../images/pune.jpg'
import mumbai from '../images/mumbai.jpg'
import karnataka from '../images/karnataka.jpg'
import indore from '../images/indore.jpg'
import tamil_nadu from '../images/tamil_nadu.jpg'
import uttar_p from '../images/uttar_p.jpg'
import hydrabad from '../images/hydrabad.jpg'
import lukhnow from '../images/lukhnow.jpg'
import banglore from '../images/banglore.jpg'
import investor from '../images/investor.jpg'
import B2B from '../images/B2B.jpg'
import B2C from '../images/B2C.jpg'
import businessman from '../images/businessman.jpg'
import car_owner from '../images/car_owner.jpg'
import channel_partner from '../images/channel_partner.jpg'
import job_seaker from '../images/job_seaker.jpg'
import property from '../images/property.jpg'
import student_graduate from '../images/student_graduate.jpg'


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

const Carousel = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          }
        ]
      };
   return(
       <div>
        <div className='ct'>
              
                     <div className="bt">
			                <a  style={{textDecoration:'none'}} href="https://rzp.io/l/RYK7OBVI">
						<span>
						
									<span className=" d-flex " style={{color:'white',padding:'5px'}}>&#127873;<h4>Get Offer Now</h4></span>
					         </span>
					</a>
		</div>
         
              <h1 className='H1 mt-2'>You Will Get State and City Wise Data</h1>
              
            
        
           <Slider {...settings} style={{marginLeft:'60px',marginRight:'50px'}} className="mt-4" >
     <div >
       <img src={hydrabad} alt="pune"/>
       <div >
       <h4 className="tx">Hydrabad</h4>
        </div>
     </div>
     <div>
     <img src={karnataka} alt=""/>
     <div >
     <h4 className="tx">Karnataka</h4>
        </div>
     </div>
     <div >
     <img src={tamil_nadu} alt=""/>
     <div >
     <h4 className="tx">Tamil Nadu</h4>
        </div>
     </div>
     <div >
     <img src={pune} alt=""/>
     <div >
    <h4 className="tx">Pune</h4>
        </div>
     </div>
     <div >
     <img src={mumbai} alt=""/>
     <div >
        
       <h4 className="tx">Mumbai</h4>
        </div>
     </div>
     <div >
     <img src={indore} alt=""/>
     <div >
        <h4 className="tx">Indore</h4>
        </div>
          </div>

          <div >
       <img src={banglore} alt="pune"/>
       <div >
      <h4 className="tx">Banglore</h4>
        </div>
     </div>

     <div >
       <img src={lukhnow} alt="pune"/>
       <div >
       <h4 className="tx">Lukhnow</h4>
        </div>
     </div>

     <div >
       <img src={uttar_p} alt="pune"/>
       <div >
       <h4 className="tx">Uttar Pradesh</h4>
        </div>
     </div>
   </Slider>
   </div>
   <div className="H2">
    <h1  className="H3">Data Base Type</h1>
    <Slider {...settings} style={{marginLeft:'60px',marginRight:'50px'}} className="mt-4" >
     <div >
       <img src={investor} alt="pune"/>
       <div >
       <h4 className="tx">Investor</h4>
        </div>
     </div>
     <div>
     <img src={property} alt=""/>
     <div >
     <h4 className="tx">Property Owner</h4>
        </div>
     </div>
     <div >
     <img src={businessman} alt=""/>
     <div >
     <h4 className="tx">Businessman</h4>
        </div>
     </div>
     <div >
     <img src={car_owner} alt=""/>
     <div >
    <h4 className="tx">Car Owner</h4>
        </div>
     </div>
     <div >
     <img src={B2C} alt=""/>
     <div >
        
       <h4 className="tx">B2C</h4>
        </div>
     </div>
     <div >
     <img src={B2B} alt=""/>
     <div >
        <h4 className="tx">B2B</h4>
        </div>
          </div>

          <div >
       <img src={student_graduate} alt="pune"/>
       <div >
      <h4 className="tx">Student Graduate</h4>
        </div>
     </div>

     <div >
       <img src={job_seaker} alt="pune"/>
       <div >
       <h4 className="tx">Job Seaker</h4>
        </div>
     </div>

     <div >
       <img src={channel_partner} alt="pune"/>
       <div >
       <h4 className="tx">Channel Partner</h4>
        </div>
     </div>
   </Slider>



   </div>

       </div>
   )
}
export default Carousel