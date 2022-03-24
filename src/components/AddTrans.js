import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/globalState';
import { useNavigate } from "react-router-dom";
import './AddTrans.css'

const AddTrans = () => {
  const [trans, setTrans] = useState({id: '', name:'',category:'',date:'',amount:''})
  const { addTransaction } = useContext(GlobalContext);
  const nav = useNavigate();


  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    
    // if(name === "amount"){    
    //   // as amount is intially string value and now converting it to numerical value
    //   value = parseInt(value);
    // }
    setTrans({ ...trans, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(parseInt(trans.amount));
    addTransaction({...trans, id: new Date().getTime().toString()});
    setTrans({id: '', name: "", category: "", date: "", amount: ''});
    nav("/dashboard");
  };

  return (
    <div className="add_trans_container">
      <form className="add_trans_form" onSubmit={handleSubmit}>
        <h1 className="trans_title">Add transaction</h1>
        <div className="trans_input_container">
          <label>Name: </label>
          <input
            name="name"
            placeholder="Enter transaction"
            value={trans.name}
            onChange={handleChange}
            className="trans_input_field"
            type="text"
            required
          />
        </div>
        <div className="trans_input_container">
          <label>Category: </label>
          <input
            name="category"
            placeholder="Enter the category"
            value={trans.category}
            onChange={handleChange}
            className="trans_input_field"
            type="text"
            required
          />
        </div>
        <div className="trans_input_container">
          <label>Date: </label>
          <input
            name="date"
            placeholder="Enter the date"
            value={trans.date}
            onChange={handleChange}
            className="trans_input_field"
            type="date"
            required
          />
        </div>

        <div className="trans_input_container">
          <label>Amount: (+ for income, - for expense)</label>
          <input
            name="amount"
            placeholder="Enter the amount"
            value={trans.amount}
            onChange={handleChange}
            className="trans_input_field"
            type="text"
            required
          />
        </div>
        <button type="submit" className="btn trans_btn">
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default AddTrans