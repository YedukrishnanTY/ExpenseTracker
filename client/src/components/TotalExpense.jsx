import React from "react";
import './TotalExpense.css'

export default function TotalExpense({data} ) {

  let totalAmount = 0;
   data.forEach((element) =>{
      element = element.amount.substring(1);
      let covertElement = parseFloat(element)
      totalAmount += covertElement
  })

  
  return (
    <div>
      <div className="total">
        <div className="total-card">
          <div className="total-content">
            <div className="total-container">
              <div className="total-name">Most Expense Category : Food</div>
              <div className="category-amount">
                Expense Amount of Food : $ 525.00
              </div>
              <div className="total-amount">Total Expense Amount : $ {totalAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
