import '../App.css'
import { useState } from 'react'
const Quetion = ()=>{

    const [selected,setSelected] = useState(null)
    const toggle = (i)=>{
        if(selected ===i){
            return setSelected(null)

        }
        setSelected(i)
    }
    return(
        <div>
            <h2 className="text-danger text-center mt-3" style={{fontWeight:'bold'}}>150+ More Category</h2>
            <h1 className="H5">Frequently Asked Question</h1>
            
            
            <div className='wrapper'>

                <div className='accordion'>
                    {data.map((item,i)=>(
                        <div className="item">
                            <div className="title" onClick={()=> toggle(i)}>
                                <h4>{item.question}</h4>
                                <span>{selected === i ?'-' : '+'} </span>

                            </div>
                            <div className={selected === i ?'content show' : 'content'}>
                                {item.answer}

                            </div>
                            </div>

                    ))}

                </div>
            </div>
           
				</div>

        
    )
}
const data=[
    {
    question:'How many years old data?',
    answer:'This data is only from year 2020 to 2024.'
    },
    {
        question:'How is the Data connectivity ?',
        answer:'Connectivity of data is above 80%.'
    },
    {
        question:'Will the data city wise and state wise filter be available?',
        answer:'Data categorized in state, city as well as pincode vise.'
    },
    {
        question:'Is this data easy to filter ?',
        answer:'Yes data is filter and user friendly.'
    },
    {
        question:'In what time we will get the data ?',
        answer:'Data will be delivered at your email id with 10 second automatically after successful payment.'
    }
]
export default Quetion