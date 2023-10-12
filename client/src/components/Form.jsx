import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Form.css";

export default function Form({data, setDataHold}) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const unique_id = uuid();


  const HandleSubmit = (e) => {
    e.preventDefault();
    const values = {
      id: unique_id,
      expenseName: expenseName,
      amount: amount,
      date: date,
      currency: "IND",
      description: expenseName,
    };
    setDataHold(values); 
    console.log(data, values); 
  };

  return (
    <div className="form">
      <form onSubmit={HandleSubmit}>
        <div className="form-card">
          <div className="form-content">
            <div>
              <label className="label-class">Expense Name :</label>
              <input
                type="text"
                className="form-name"
                placeholder="Name"
                onChange={(e) => setExpenseName(e.target.value)}
              />
            </div>
            <div>
              <label className="label-class">Date of Expense :</label>
              <input
                id="date-pick"
                className="form-date"
                type="date"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label className="label-class">Expense Amount :</label>
              <input
                id="amount"
                className="form-amount"
                type="number"
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="expense-button">
            <input type="submit" value="Add" />
          </div>
        </div>
      </form>
    </div>
  );
}
