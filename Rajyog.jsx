import election from '../images/election.webp'
import rajyog from '../images/rajyog.jpeg'
const Rajyog = ()=>{
    return(
        <div>
            <div className='m-5 text-center' >
            <img src={rajyog} alt="rajyog" style={{width:'130px'}}/>
            </div>
            <div style={{marginLeft:'190px' ,display:'flex'}}>
                <img src={election} alt='election' style={{width:'500px',height:'900px'}}/>
                <div className='border border-1  ' style={{width:'500px',height:'900px',backgroundColor:'#fffdd0',paddingTop:'280px'}}>
                    <h6 className='text-center m-2 mt-5' style={{color:'#6c6831'}}>WELCOME</h6>
                    <h1 className='m-4 text-center' style={{fontFamily:'initial',fontSize:'50px'}}>Rajyog Election Management & Consulting</h1>
                    <h6 className='text-center m-3' style={{color:'#6c6831'}}>We provide software/consulting/strategies related to election for politicians in india</h6>
                </div>
            </div>
            
        </div>
    )
}
export default Rajyog