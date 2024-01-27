import React, { useState } from 'react';
import StyleForm from './form.module.css'

const Form = ({ getForm }) => {
  // const [title, setTitle] = useState('');
  // const [cost, setCost] = useState('');
  // const [date, setDate] = useState('');
  

  const [formData, setFormData] = useState({
    name: '',
    fname: '',
    age: '',
    email:'',
    date: '',
    course:'',
    gender: 'false',
    hobbies: []
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onCheckedHandler =(e) =>{
    // const {name , id, label} =e.target;
    // if(isChecked && id === label){
    // setIschecked({...formData, [name]: label})
    // }
    setFormData((prev)=> ({...prev, [e.target.name]: e.target.value}))
  }
  const onCheckedArrHandler =(e) =>{
    // const {name , id, label} =e.target;
    // if(isChecked && id === label){
    // setIschecked({...formData, [name]: label})
    // }
    setFormData((prev)=> ([...prev, e.target.value]))
  }

  // const onChangeTitleHandler = (e) => setTitle(e.target.value);
  // const onChangeCostHandler = (e) => setCost(e.target.value);
  // const onChangeDateHandler = (e) => setDate(e.target.value);
  // const [checkedData, setCheckedData] = useState('');
  // const onChecked =(e)=>{
  //   const id = e.target.id;
  //   const label = e.target.label;
  //   const checked = e.target.checked;
  //   if(checked && id===label){
  //     setCheckedData({
  //       ...checkedData, label,
  //     });
  //   }
       
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    // const data = {
    //   title,
    //   cost,
    //   date,
    // };
    getForm(formData);
    setFormData({
      name: '',
      fname: '',
      age: '',
      email: '',
      date: '',
      course:'',
      gender: 'false',
      hobbies: [],
    });
  };
  return (
    <form onSubmit={submitHandler} className={StyleForm.formcontainer}>

      <div >
        <h3 htmlFor='name'>Name</h3> <br />
        <input
          className={StyleForm.inputtext}
          type='text'
          name='name'
          value={formData.name}
          placeholder='Enter your name'
          id='name'
          onChange={onChangeHandler}
          required
        />
      </div><br/>
      <div>
        <h3 htmlFor='fname'>Father Name</h3> <br />
        <input
          className={StyleForm.inputtext}
          type='text'
          name='fname'
          value={formData.fname}
          placeholder='Enter your father name'
          id='fname'
          onChange={onChangeHandler}
          required
        />
      </div><br/>
      <div>
        <h3 htmlFor='cost'>Age</h3> <br />
        <input
          className={StyleForm.inputtext}
          type='text'
          name='age'
          value={formData.age}
          onChange={onChangeHandler}
          placeholder='Enter your age'
          id='age'
          required
        />
      </div><br/>
       <div>
        <h3 htmlFor='email'>Email</h3> <br />
        <input
          className={StyleForm.inputtext}
          type='text'
          name='email'
          value={formData.email}
          placeholder='Enter your email'
          id='email'
          onChange={onChangeHandler}
          required
        />
      </div> <br/>
      <div>
        <h3 htmlFor='course'>Educational Field</h3> <br />
        <select
        className={StyleForm.inputtext}
          type='text'
          name='course'
          value={formData.course}
          onChange={onChangeHandler}
          id='course'
          required>

          <option value='computer science'>Computer Science</option>
          <option value='software engineering'>Software Engineering</option>
          <option value='mass communication'>Mass communication</option>
          <option value='biotechnology'>Biotechnology</option>
        
        </select>
      </div><br/>
      <div>
        <h3 htmlFor='gender'>Gender</h3> <br />
        <label htmlFor='male'>Male</label>
        <input
          type='radio'
          name='gender'
          value='male'
          id='male'
          label='male'
          onChange={onCheckedHandler}
          required
        />
        <label htmlFor='female'>Female</label>
        <input
          type='radio'
          name='gender'
          value='female'
          id='male'
          label='female'
          onChange={onCheckedHandler}
          required
        />
        
      </div> <br/>
      <div>
        <label htmlFor='hobbies'>Hobbies</label> <br />
        <label htmlFor='Reading Book'>Reading Book</label>
        <input
          type='checkbox'
          name='hobbies'
          value= 'Reading Book'
          id='Reading Book'
          onChange={onCheckedArrHandler}
        />
        <label htmlFor='sports'>Sports</label>
        <input
          type='checkbox'
          name='hobbies'
          value='sports'
          id='sports'
          onChange={onCheckedArrHandler}
        />
        
      </div>
      {/*
      <div>
        <label htmlFor='cost'>Color</label> <br />
        <input
          type='color'
          name='cost'
          value={expenseData.cost}
          onChange={onChangeHandler}
          placeholder='Expense Price...'
          id='cost'
          required
        />
      </div> */}
      <div>
        <h3 htmlFor='date'>Date</h3> <br />
        <input
          className={StyleForm.inputtext}
          type='date'
          name='date'
          value={formData.date}
          onChange={onChangeHandler}
          id='date'
          required
        />
      </div>
      
      <button className={StyleForm.addbtn} type='submit'>Add</button>
    </form>
  );
};

export default Form;