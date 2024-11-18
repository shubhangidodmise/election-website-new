
import whatsapp from '../images/whatsapp.jpeg'
const Election = ()=>{
    return(
        <div>
            <div style={{backgroundColor:"#fffdd0"}} className="container text-center mt-4 p-5 ">

                <h5 style={{color:'#6c6831'}}>CONTACT US</h5>

                <h4>Please feel free to contact on below numbers</h4>
                <h6 className="mt-3" style={{color:'#716f4c'}}>9921116541 / 8668216894 / 8459277318</h6>

                <button className="mt-4 btn " style={{width:'300px',height:'50px',color:'white',backgroundColor:'rgba(0, 0, 0, 0.855)',fontSize:'20px'}}>
                    <img src={whatsapp} alt="whatsapp" style={{width:'30px'}} className='m-2 bg-dark'/>Message On Whatsapp</button>

                <h5 className="mt-5">rajyogelection@gmail.com</h5>

                <p className="mt-4" style={{color:'#716f4c'}}>GAT NO 98 AND 99, PLOT-D, FLAT NO B 801, KRYSTAL CITY PEARL SOCIETY, 
                    LAXMI CHOWK, CHIKHALI, Pune, Maharashtra, 411062</p>
            </div>
            <div className="text-center mt-5">
                <p>Copyright © 2024 Rajyog Election Management & Consulting- All Rights Reserved.</p>
                <p>Developed By - Stratabiz Services</p>
            </div>

        </div>
    )
}
export default Election