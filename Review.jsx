import '../App.css'
import manager_1 from '../images/manager_1.jpg'
import manager_2 from '../images/manager_2.jpg'
import manager_3 from '../images/manager_3.jpg'
import manager_4 from '../images/manager_4.jpg'
const Review = ()=>{
    return(
        <div>
            <h1 className=" r">What Customer Say About Database ?</h1>
            
              
            <div className='bg-dark d-flex'>
                <section className='r1'style={{marginLeft:'100px'}}>
                    <p className='p-2'>
                    User-Friendly Interface: The Pan India Database boasts an intuitive user interface that makes navigation a breeze. The categorization by state, city, pin code, and profession enables.
                    </p>
                    <div className='d-flex'>
                    <img src={manager_1} alt='manager_1' className='m1 mt-2 '/>
                
                    <h6 style={{marginLeft:'30px',lineHeight:'60px'}} className="text-white ">Rahul Singh</h6>
                    
                    </div>
                     <h6 style={{marginLeft:'80px',lineHeight:'0px', color:'yellowgreen',fontFamily:'serif'}} >Channel Partner</h6>
                </section>
                <section className='r1 '>
                    <p className='p-2'>
                    One of the standout features of the Pan India Database is its detailed client profiles. Each entry includes essential details such as client names, contact numbers, emails, and locations. This depth of information ensures that users can connect with potential clients or partners effectively.
                    </p>
                    <div className='d-flex'>
                    <img src={manager_2} alt='manager_2' className='m1 mt-2 '/>
                
                    <h6 style={{marginLeft:'30px',lineHeight:'60px',fontFamily:'inherit'}} className="text-white ">Karan Handa</h6>
                    
                    </div>
                     <h6 style={{marginLeft:'80px',lineHeight:'0px', color:'yellowgreen',fontFamily:'serif'}} >Counsltant</h6>
                </section>
                <section className='r1'>
                    <p className='p-2'>
                    The utility of the Pan India Database knows no bounds. Businesses can leverage the data to identify new markets, establish local partnerships, or tailor their products and services to specific regions. Researchers can analyze trends across different states and cities, gaining valuable insights into regional preferences and behaviors.


                    </p>
                    <div className='d-flex'>
                    <img src={manager_3} alt='manager_3' className='m1 mt-2 '/>
                
                    <h6 style={{marginLeft:'30px',lineHeight:'60px',fontFamily:'inherit'}} className="text-white ">Vijay Ramamurthy</h6>
                    
                    </div>
                     <h6 style={{marginLeft:'80px',lineHeight:'0px', color:'yellowgreen',fontFamily:'serif'}} >Broker</h6>

                </section>
                <section className='r1'>
                    <p className='p-2'>
                    In the realm of databases, accuracy and reliability are paramount. The Pan India Database excels in this regard, undergoing regular updates to ensure the information remains current. This dedication to data accuracy enhances its credibility and usefulness, setting it apart from lesser databases that may provide outdated or incomplete information.
                    </p>
                    <div className='d-flex'>
                    <img src={manager_4} alt='manager_4' className='m1 mt-2 '/>
                
                    <h6 style={{marginLeft:'30px',lineHeight:'60px',fontFamily:'inherit'}} className="text-white ">Dhruv Sanga</h6>
                    
                    </div>
                     <h6 style={{marginLeft:'80px',lineHeight:'0px', color:'yellowgreen',fontFamily:'serif'}} >Sales Manager</h6>

                </section>
            </div>

        </div>
    )
}
export default Review