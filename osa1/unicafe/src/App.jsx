import {useState} from 'react'


const Statistics = (props) => {
  return (
    <table>
      <tbody>
        <StatisticLine text ="good" value={props.good}/>
        <StatisticLine text ="neutral" value={props.neutral}/>
        <StatisticLine text ="bad" value={props.bad}/>
        <StatisticLine text ="all" value={props.total}/>
        <StatisticLine text ="average" value={props.average}/>
        <StatisticLine text ="positive" value={props.positive + " %"}/>
      </tbody>
    </table>
  )
}

const StatisticLine =(props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Button =(props) => {
  return (
    <button onClick= {props.onClick}>
      {props.text}
    </button>
  )
}

const App =() => {

const [good, setGood] = useState(0)
const [neutral,setNeutral] = useState(0)
const [bad, setBad] = useState(0)
const total = good + neutral + bad
const average = total ===0 ?0 :(good-bad)/total
const positive = total ===0 ?0 : (good/total)*100


  return(
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good+1)} text="good"/>
      <Button onClick={() => setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={() => setBad(bad+1)} text="bad"/>
      
      <h2>statistics</h2>

      {total===0 ?(<p>No feedback given</p>) :(
      <Statistics
        good= {good}
        neutral= {neutral}
        bad= {bad}
        total ={total}
        average={average}
        positive={positive}
      />
      )}
    </div>
  )
}

export default App
