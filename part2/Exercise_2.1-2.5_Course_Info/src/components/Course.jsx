
const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Course = ({course}) => 
<>
    <Header course={course.name}/> 
    {course.parts.map((x)=> <Part key={x.id} part={x}/>)}
    <Total sum={course.parts.reduce((acc, cur)=> acc + cur.exercises, 0)}/>
</>

export default Course