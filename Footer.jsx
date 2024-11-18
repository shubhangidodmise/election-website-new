const Footer = ()=>{
    return(
        <div>
            <div className="d-flex ">
            <span > <h1 style={{fontSize:'42px',fontWeight:'bold',marginLeft:'500px'}} >Offer Valid Only</h1> </span>
            <span className="text-danger text-center ms-3" ><h1 style={{fontSize:'42px',fontWeight:'bold'}}>Today</h1></span>
            </div>
            <h6 style={{backgroundColor:'black' ,color:'darkorange',width:'100%',height:'70px'}} className="text-center p-3">Note :- No exceptions would be made beyond the offer expire.</h6>
        </div>
    )
}
export default Footer