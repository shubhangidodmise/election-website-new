import { useEffect,useRef,useState } from "react"

const formatTime = (time)=>{
    let minutes = Math.floor( time / 60)
    let seconds = Math.floor(time -minutes * 60)

    if (minutes <=10)minutes ='0' +minutes;
    if (seconds <=10)seconds = '0'+seconds
    return minutes  +   ':'   + seconds
}



export default  function CountDown({seconds}){
    const [countdown,setCountdown]=useState(seconds)
    const timerId = useRef()

    useEffect(()=>{
        timerId.current = setInterval(()=> {
            setCountdown(prev=>prev -1)

        },1000)
        return()=> clearInterval(timerId.current)
    },[])

    useEffect(()=> {
        if(countdown<= 0){
            clearInterval(timerId.current)
            alert("END")

        }

    }, [countdown])
    return(
        <div>
            <div className="bg-dark text-white text-center w-75 " style={{marginLeft:'120px'}}>
        <h2 style={{marginLeft:'330px',width:'400px',height:'120px',fontSize:'60px'}}>{formatTime(countdown)} </h2>
         </div>
         <div style={{marginLeft:'100px',color:'darkorange'}}>
            <h1>Data Base Type</h1></div>
            <div className="text-dark mt-3" style={{marginLeft:'90px',fontFamily:'revert-layer'}}>
            <h4>“Welcome to India’s Most Comprehensive Database: Explore our Pan-India
                 treasure trove with 100+ categories, meticulously organized by state, city, and pincode. Whether
                 you’re on the hunt for skilled professionals, property owners,
                  savvy investors, or expert lawyers,</h4></div>
         
    </div>
    )
}