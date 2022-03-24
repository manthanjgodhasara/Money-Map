import React, { useContext, useEffect } from 'react'
import "./Dashboard.css"
import Transaction from './Transaction';
import {GrAdd} from 'react-icons/gr'
import { GlobalContext } from '../context/globalState';


const Dashboard = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => {
    return parseFloat(transaction.amount);
  });

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = parseFloat(
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) *-(1)    
  ).toFixed(2)

  const total = parseFloat(amounts.reduce((acc, item) => (acc += item), 0).toFixed(2));
  const sign = total < 0 ? "-" : "+";

  return (
    <>
      <div className="dashboard_main-container">
        <div className="dashboard_stats-container">
          <div className="dashboard_stats-total">
            <h1 style={{ fontSize: 35 }}>Your Balance</h1>
            <h3 style={{ fontSize: 25, margin: 10 }}>{sign} &#8377; {Math.abs(total)}</h3>
          </div>
          <div className="dashboard_stats-values">
            <div className="dashboard_stats-income green">
              <h1 style={{ fontSize: 25 }}>Income</h1>
              <h3 style={{ fontSize: 20, margin: 10 }}>+ &#8377; {income}</h3>
            </div>
            <div className="dashboard_stats-expense red">
              <h1 style={{ fontSize: 25 }}>Expense</h1>
              <h3 style={{ fontSize: 20, margin: 10 }}>- &#8377; {expense}</h3>
            </div>
          </div>
        </div>

        <div className="dashboard_history-container">
          <h1
            style={{
              fontSize: 25,
              textAlign: "center",
              margin: 50,
              marginTop: 75,
            }}
          >
            Today's History
          </h1>
          {!transactions.length && <h3>No items to display</h3>}
          {transactions.map((transaction)=>{
            return(
              <Transaction {...transaction}/>
            )
          })}

        </div>
      </div>
    </>
  );
}

export default Dashboard