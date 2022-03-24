import React, { useContext, useEffect } from 'react'
import './Transaction.css'
import {BiEdit} from 'react-icons/bi'
import { MdDelete } from "react-icons/md";
import { GlobalContext } from '../context/globalState';

const Transaction = ({id, name, category, date, amount}) => {
  const {deleteTransaction} = useContext(GlobalContext)

  const amountParse = parseFloat(amount).toFixed(2)
  const sign = amountParse < 0 ? "-" : "+";
  return (
    <div
      className={
        sign === "+"
          ? `transaction_container green`
          : `transaction_container red`
      }
    >
      <div className="transaction_title" style={{ fontSize: 23 }}>
        {name}
      </div>
      <div className="transaction_amount" style={{ fontSize: 19 }}>
        {sign} &#8377; {Math.abs(amountParse)}
      </div>
      <div className="icon_container">
        <BiEdit className="icon icon_green" />
        <MdDelete className="icon icon_red" onClick={()=>deleteTransaction(id)}/>
      </div>
    </div>
  );
}

export default Transaction