import React from 'react';
import StyleItems from './style.module.css'


const ListItems = ({ items }) => {
  // props.expenses.forEach((data) => console.log(data.title));

  return (
    <ul className={StyleItems.container}>
      {items.map((d) => (<>
      
        <li>
    

    <h3>{d.name}</h3>
    <h4>{d.fname}</h4>

    <p>{d.age}</p>
    <p>{d.email}</p>
    <p>{d.date}</p>
    <p>{d.course}</p>
    <p>{d.gender}</p>
    <p>{d.hobbies}</p>

    
    
  </li>
  
  <button className={StyleItems.button}>Edit</button>
  <button className={StyleItems.button}>Delete</button>
</>
        
       // <ExpenseItem name={d.name} fname={d.fname} date={d.date} age={d.age} email={d.email} course={d.course} gender={d.gender}/>
      ))}
    </ul>
  );
};

export default ListItems;