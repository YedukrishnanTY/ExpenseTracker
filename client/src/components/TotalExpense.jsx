import React from "react"
import "./TotalExpense.css"

export default function TotalExpense({ data  }) {
  let totalAmount = 0;
  data.forEach((element) => {
    let convertedElement = parseFloat(element.amount)
    totalAmount += convertedElement;
  });

  // const result = Object.groupBy(dataValues, ({ date }) => date);


  // let valuesOfConvertElement = {};
  // Object.values(result).forEach((element) => {
    
  //   let amount1 = element[0].amount.substring(1);
  //   let amount2 = element[1]?.amount.substring(1);
  //   if (amount2 === undefined) amount2 = 0;
  //   let convertElement1 = parseFloat(amount1);
  //   let convertElement2 = parseFloat(amount2);
  //   let convertElement = convertElement1 + convertElement2;
  //   let currentDate = element[0].date;
  //   valuesOfConvertElement[currentDate] = convertElement;
  //   console.log(currentDate)
  // });
  // let sortOfConvertElement = Object.entries(valuesOfConvertElement);
  // let sorted = sortOfConvertElement.sort((a, b) => a[1] - b[1]);
  
  // console.log(sorted[sorted.length - 1]);
  return (
    <div>
      <div className="total">
        <div className="total-card">
          <div className="total-content">
            <div className="total-container">
              <div className="total-name">
                Most Expensive day :  
              </div>
              <div className="category-amount">
                Expense Amount: $ 
              </div>
              <div className="total-amount">
                Total Expense Amount : $ {totalAmount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
