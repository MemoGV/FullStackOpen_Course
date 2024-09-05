import { useState } from "react"

const Button=({text, handleClick})=> <button onClick={handleClick}>{text}</button>

const StadisticLine=({text, value, isPercentage})=>{
  return(
    <tr>
      <td>{text}</td><td>{isPercentage? `${value} %` : value}</td>
    </tr>
  )
}
const Stadistics=({good, neutral, bad, all, average, positive})=>{
    if(all === 0){
      return(
        <h2>No feedback given</h2>
      )
    }else{
      return (
        <>
          <h2>Stadistics</h2>
          <table>
            <tbody>
              <StadisticLine value={good} text='Good'/>
              <StadisticLine value={neutral} text='Neutral'/>
              <StadisticLine value={bad} text='Bad'/>
              <StadisticLine value={all} text='All'/>
              <StadisticLine value={average} text='Average'/>
              <StadisticLine value={positive} text='Positive' isPercentage={true}/>
            </tbody>
          </table>
        </>
      )
    }
}
const AnecdoteDisplay=({title,anecdote, votes})=>{
  if(anecdote === ''){
    return(
      <>
      </>
    )
  }
  return(
  <>
  <h2>{title}</h2>
  <p>{anecdote}</p>
  <p>has {votes} votes</p>
  </>
)
}

const App=()=>{

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [selected, setSelected] = useState('');
  const [numberRandom, setNumberRandom] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0,0]);
  const [mostVoted, setMostVoted] = useState('');

  const setGoodValue=()=>{
    const updateGood = good+1;
    const total = updateGood + bad + neutral;
    const updateAverage = (updateGood - bad) / total;
    const updatePositive = (updateGood/ total)*100;
    setGood(updateGood);
    setAll(total);
    setAverage(updateAverage.toFixed(2));
    setPositive(updatePositive.toFixed(2));
  }

  const setNeutralValue=()=>{
    const updateNeutral = neutral+1
    const total = updateNeutral + good + bad;
    const updateAverage = (good-bad)/total;
    const updatePositive = (good/total)*100;
    setNeutral(updateNeutral);
    setAll(total);
    setAverage(updateAverage.toFixed(2));
    setPositive(updatePositive.toFixed(2));
  }
  const setBadValue=()=>{
    const updateBad = bad+1;
    const total = updateBad + good + neutral;
    const updateAverage = (good-updateBad)/total;
    const updatePositive = (good/total)*100;
    setBad(updateBad);
    setAll(total);
    setAverage(updateAverage.toFixed(2));
    setPositive(updatePositive.toFixed(2));
  }
  const setRandomNumber=()=>{
    
    const updateRandomNumber = randomNumber(0,7);
    setNumberRandom(updateRandomNumber)
    setSelected(anecdotes[updateRandomNumber]);
  }

  const voteAnecdote=()=>{
    const copyVotes = [...votes];
    copyVotes[numberRandom] +=1;
    setVotes(copyVotes);
    setMostVoted(anecdotes[maxIndex(copyVotes)]);
  }

  const randomNumber = (min, max) => Math.floor(Math.random() * (max-min) + min);
  const maxIndex =(arr)=> arr.reduce((acc, cur, idx) => cur > arr[acc] ? idx : acc,0);

  return ( 
    <>
      <h1>Give feedback</h1>
      <Button handleClick={()=>setGoodValue()} text='Good'/>
      <Button handleClick={()=>setNeutralValue()} text='Neutral'/>
      <Button handleClick={()=>setBadValue()} text='Bad'/>
      <Stadistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
      <AnecdoteDisplay title='Anecdote of the day' anecdote={selected} votes={votes[numberRandom]}/>
      <Button handleClick={()=>voteAnecdote()} text='Vote'/>
      <Button handleClick={()=> setRandomNumber()} text='Free Anecdote'/>
      <AnecdoteDisplay title='Anecodte with most votes' anecdote={mostVoted} votes={votes[maxIndex(votes)]}/>
      
    </>
  )
}

export default App
