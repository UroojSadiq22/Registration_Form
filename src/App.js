import Header from './same/Header/header.jsx';
import Form from './Features/Form/index.js';
import ListItem from './Features/ListItems/index.js';
import Layout from './ui/Layout';
import './App.css';
import { useState } from 'react';
const arr = [
  {
    id: 1,
    name: 'Something Abc',
    fname: 'something',
    age: 87,
    email : 'abc@gmail.com',
    date: '2023-08-21',
    gender: 'male'
  },
  {
    id: 2,
    name: 'Something CDE',
    fname: 'something',
    age: 76,
    email : 'xyz@gmail.com',
    date: '2023-05-21',
    gender:'female'
  },
  {
    id: 3,
    name: 'Something ASD',
    fname: 'something',
    age: 765,
    email : 'pqr@gmail.com',
    date: '2022-01-08',
    gender:'male'
  },
];

const App = () => {
  const [formdata, setFormdata] = useState(arr);
  const getFormData = (data) => {
    setFormdata([
      { id: Math.floor(Math.random() * 9999), ...data },
      ...formdata,
    ]);
  };

  return (
    <>
      <Header />
      <Layout>
        <h1>Add Your Details</h1>
        <Form getForm={getFormData} />
        <ListItem items={formdata} />
      </Layout>
    </>
  );
};

export default App;
