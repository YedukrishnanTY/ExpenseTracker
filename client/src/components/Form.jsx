import React from 'react'
import './Form.css'
export default function Form() {
  return (
       <div className="form">
            <div className="form-card">
                <div className="form-content">
                    <div>
                        <label for="name" className="label-class">Expense Name :</label>
                        <input type="text" className="form-name" placeholder="Name" />
                    </div>
                    <div>
                        <label for="date-pick" className="label-class">Date of Expense :</label>
                        <input id="date-pick" className="form-date" type="date" placeholder="Date" />
                    </div>
                    <div>
                        <label for="amount" className="label-class">Expense Amount :</label>
                        <input id="amount" className="form-amount" type="number" placeholder="Amount" />
                    </div>
                </div>
                <div className="expense-button">
                    <input type="button" value="Add" />
                </div>
            </div>
        </div>
  )
}
