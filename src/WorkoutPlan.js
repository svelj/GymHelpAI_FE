import {useState} from "react";
import './WorkoutPlan.css';
function WorkoutPlan(){
    const [gender,setGender] = useState('');
    const [weight,setWeight] = useState('');
    const [height,setHeight] = useState('');
    const [goal,setGoal] = useState('');
    const [age,setAge] = useState('');
    const[plan,setPlan] = useState('');

    const createPlan = async () =>{
        try{
            const response = await fetch(`http://localhost:8080/plan-create?gender=${gender}&weight=${weight}&height=${height}&goal=${goal}&age=${age}`)
            const data = await response.text();
            console.log(data);
            setPlan(data);
        }catch (error){
        console.error("Error generating a plan: ",error);
        }
    };

    return (
        <div  className="container">
            <h2>💪 Create your fitness plan with the help of AI</h2>
            <input
            type="text"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            placeholder="Enter your gender"
            className="input-field"
            />
            <input
                type="text"
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
                placeholder="Enter your weight(kg)"
                className="input-field"
            />
            <input
                type="text"
                value={height}
                onChange={(e)=>setHeight(e.target.value)}
                placeholder="Enter your height(cm)"
                className="input-field"
            />
            <input
                type="text"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                placeholder="Enter your age"
                className="input-field"
            />
            <input
                type="text"
                value={goal}
                onChange={(e)=>setGoal(e.target.value)}
                placeholder="What is your goal?"
                className="input-field"
            />

            <button onClick={createPlan} className="button"> 🚀 Generate Plan</button>

            <div className="result">
                <pre>{plan}</pre>
            </div>
        </div>
    );
}
export default WorkoutPlan;