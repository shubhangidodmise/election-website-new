import excel_1 from '../images/excel_1.jpeg'
import excel_2 from'../images/excel_2.jpeg'
import excel_3 from'../images/excel_3.jpeg'
import excel_4 from '../images/excel_4.jpeg'
import  '../App.css'

const Excel = ()=>{
    return(
        <div >
            <h1 className=' h1 ' >Demo & Sample of Data</h1>
            <div className='ex mt-4 '>
                
                
            <img src={excel_1} alt="excel_1" className='img'/>
            

            
            <img src={excel_2} alt="excel_2" className='img'/>


            <img src={excel_3} alt="excel_3" className='img'/>



            <img src={excel_4} alt="excel_4" className='img'/>
            </div>

        </div>
    )
}
export default Excel