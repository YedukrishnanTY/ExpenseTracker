import React from "react";
import "./TotalExpense.css";

export default function TotalExpense({ data }) {
  let totalAmount = 0;
  data.forEach((element) => {
    element = element.amount.substring(1);
    let covertElement = parseFloat(element);
    totalAmount += covertElement;
  });

  const result = Object.groupBy(data, ({ date }) => date);
  var temp = {};

  let valuesOfConvertElement = {};
  Object.values(result).forEach((element, i) => {
    let element1 = element[0].amount.substring(1);
    let element2 = element[1]?.amount.substring(1);
    if (element2 == undefined) element2 = 0;
    let convertElement1 = parseFloat(element1);
    let convertElement2 = parseFloat(element2);
    let convertElement = convertElement1 + convertElement2;
    let currentDate = element[0].date;
    valuesOfConvertElement[currentDate] = convertElement;
    console.log(currentDate)
  });
  let sortOfConvertElement = Object.entries(valuesOfConvertElement);
  let sorted = sortOfConvertElement.sort((a, b) => a[1] - b[1]);
  
  console.log(sorted[sorted.length - 1]);



  return (
    <div>
      <div className="total">
        <div className="total-card">
          <div className="total-content">
            <div className="total-container">
              <div className="total-name">
                Most Expensive amount in a day({sorted[sorted.length - 1][0]}) - ${sorted[sorted.length - 1][1]}
              </div>
              <div className="category-amount">
                Expense Amount of Food : $ 525.00
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
