import laptop_5 from '../images/laptop_5.jpeg'

const Card = ()=>{
    return(
        <div>
            
             <div className='border border-danger border-5 border-top-0 border-bottom-0 mt-3  ' 
             style={{marginLeft:'350px' ,width:'580px'}}>

             <div>
                <h1 className="bg-success mt-2 text-white text-center  ms-2"
                 style={{ width:'550px' ,height:'50px'}}>Now or Never <span style={{color:'darkorange'}}>Offer</span>  </h1>
                 
               <h1 style={{marginLeft:'180px'}} >PAN  INDIA</h1>  
              <h1 className="ms-1 mt-0 text-center " style={{color:'darkorange'}}  >100 CRORE <span style={{color:'black'}}>DATABASE</span></h1>
            
            
            <div className='d-flex'>

             <h5 className=' border border-dark rounded-pill text-center p-2  bg-warning  ' 
             style={{width:'70px',height:'70px',marginLeft:'60px',color:'navy',marginTop:"80px" }}>
                  &#8377;49 <br/>only </h5>

               <img src={laptop_5} alt="hp_15s" style={{width:'260px',height:'200px'}} 
              className='mt-0'/> 
              <span style={{width:'60px',height:'60px',marginTop:'40px'}}  
               className=' border border-dark rounded-pill bg-warning  text-danger pt-3 ps-2'>

                <h5><del  >&#8377;99</del></h5>

                <h5 style={{width:'170px',height:'30px',backgroundColor:'orange', color:'navy'}} className='mt-5 p-1'>ONLY FOR TODAY</h5>
                </span>
                
                  </div>
                  <h6 style={{backgroundColor:'orange', color:'navy',marginLeft:'200px', width:'140px',height:'30px'}} className='p-1 text-center'>
                    
                    139+ CATEGORY</h6>
                </div>
             
             <div className='d-flex  p-1 mb-4' 
             style={{marginLeft:'5px',width:'650px',fontSize:'21px'}}>
                <ul className='me-2 text-dark'>
                    <li>Collage Student </li>
                    <li>Job Seeker</li>
                    <li>Car Owner</li>
                    <li>Online Gamer</li>
                    <li>Banker</li>
                    <li>MLM DATA</li>
                    
                </ul>
                <ul className='me-1'>
                <li>Property Owner</li>
                <li>Existing Loan Data</li>
                <li>Corporate Data</li>
                <li>Credit Card Holder</li>
                <li>Salaried Person</li>
                <li>Stock Market</li>
                </ul>
                <ul>
                    <li>Businessman</li>
                    <li>Agent</li>
                    <li>B2B Data</li>
                    <li>B2C Data</li>
                    <li>Corporate</li>
                    <li>Investor</li>
                </ul>
                </div>
                </div>
             <h3 style={{marginLeft:'350px',width:'580px',height:'60px'}} className='bg-success text-white text-center mt-0 mb-3'>
                Useful For Businessman @ Self Emploed </h3>

                <h5 style={{marginLeft:'520px',lineHeight:'2px'}}>100 Cr Pan India Database</h5>
                <div className='mt-4'>
                <span style={{color: "#000000;",marginLeft:'550px'}} >Price :-<del> 349 Rs&nbsp;</del>
                </span></div>
                <div className='mt-3 text-primary'>
                <h4 style={{textAlign: "center;"}}><span style={{color: "#0000ff;",marginLeft:'520px'}} ><strong>Offer Price :- 49 Rs</strong></span></h4>
             </div>
            </div>
    )

}
export default Card