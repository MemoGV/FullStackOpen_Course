const Header =({course})=>{
  return(
    <h1>{course.name}</h1>
  )
}
const Part=({part, exercise})=>{
  return(<p>{part} {exercise}</p>) 
}
const Content=({course})=>{
  const {parts} = course
  return(
    <>
      <Part part={parts[0].name} exercise={parts[0].exercises}/>
      <Part part={parts[1].name} exercise={parts[1].exercises}/>
      <Part part={parts[2].name} exercise={parts[2].exercises}/>
    </>
  )
}
const Total=({course})=>{
  const {parts} = course;
  const total = parts.reduce((acc, curr)=> acc + curr.exercises, 0)
  return(
    <p>Number of exercises {total}</p>
  )
}
const App=()=>{
  const course = { 
    name:'Half Stack appplication development',
    parts : [{
      name:'Fundamentals of React',
      exercises:10
      },
      {
      name:'Using props to pass data',
      exercises: 7
      },
      {
      name:'State of a component',
      exercises: 14
      }]}
      
  return (
    <>
        <div>
          <Header course={course}/>
          <Content course={course}/>
          <Total course={course}/>
        </div>
    </>
  )
}

export default App
