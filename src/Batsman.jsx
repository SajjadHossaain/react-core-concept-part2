import { useActionState, useState } from "react"

export default function Batsman(){
    let [runs,setRuns] = useState(0)
    let [sixes,setSixes] = useState(0)
    let [fours,setFours]= useState(0)

    const handleSingle =()=>{
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }

    const handleSix = () =>{
        const updateRuns = runs+6;
        const updateSix = sixes + 1;
        setSixes(updateSix)
        setRuns(updateRuns);
    }

    const handleFour = () =>{
        const updateFour = fours + 1;
        setFours(updateFour)
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }

    return(
        <div>
            <h1>Four Count : {fours}</h1> <br />
            <h1>Six Count : {sixes}</h1>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score : {runs}</h1>
            <button onClick={handleSingle}>Single Run</button> <br />
            <button onClick={handleFour}>Four</button><br />
            <button onClick={handleSix}>Six</button><br />
        </div>
    )
}