import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1> {props.course} </h1>
    </div>
  )
}

function Content(props) {
  const parts = props.parts
  const parts_list = (
  
     parts.map ((part) => 
     <div key = {part.id}>
       <p> {part.name} {part.exercises} </p>
     </div>
     )
     
  );
  return (
    <div>
      {parts_list} 
    </div>
  );
}

function Total(props) {
  let my_total =0;
  const num_total = (
    props.parts.map ((exe) => 
      my_total += exe.exercises
    )
  );

    return (
      <div>
        Number of exercises { my_total }
      </div>
    );
}



const App = () => {

  const course = 'Half Stack application development'
    const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },

    {
      name: 'Using props to pass data' ,
      exercises: 7
    },

    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts} /> 
      <Total parts= {parts} />
    </div>
  )


}

ReactDOM.render(<App />,document.getElementById('root'))

