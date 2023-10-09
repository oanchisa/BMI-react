import { useRef, useState } from "react"
import './BMI.css'

const Input = ({Referent ,inputID, inputLabel , inputUnit}) => {
    return(
        <div className="input-group">
            <label for={inputID}>{inputLabel}</label>
            <input ref={Referent} id={inputID} type='text'/>
            {inputUnit}
        </div>
    )
}

const BMI = () => {
    const weightRef = useRef(null);
    const heightRef = useRef(null);
    const [Bmi, setBmi] = useState(0)

    const calculateBMI = () => {
        if(weightRef.current.value && heightRef.current.value){
            setBmi(weightRef.current.value / Math.pow(heightRef.current.value/100, 2))
        }
    }

    function Reset(){
        weightRef.current.value = null;
        heightRef.current.value = null;
        setBmi(0);
    }
    
    return(
        <div className='container'>
            <h1>โปรแกรมคำนวณค่า BMI</h1>
            <center><Input Referent={weightRef} 
            inputID='weight' 
            inputLabel='Weight : ' 
            inputUnit='  Kg.'/>

            <Input Referent={heightRef} 
            inputID='height' 
            inputLabel='Height : '
            inputUnit='  Cm.'/>
            <br/>

            <button onClick={()=>calculateBMI()}>คำนวณ</button>
            
            <p><h2>Your BMI :  {Bmi.toFixed(2)}</h2> 
            ค่า BMI ของคุณอยู่ในระดับ     "{Bmi < 18.5 ? 'ต่ำกว่าเกณฑ์' : Bmi > 30 ? 'น้ำหนักเกิน' : 'ปกติสมส่วน'}"</p>
            
            <button onClick={() => {Reset()}}>Reset</button><br/></center>
        </div>
    )
}

export default BMI