import React from "react";
import "./Details.css";
import moment from"moment";

export default function Details( {data} ) {


  return (
    <div>
      <section className="details">
        <div className="details-card">
        {data.map((element, i) => (
          <div key={i} className="details-content">

            <div className="details-container">
  
                  <div className="details-name">
                    Expense Name : {element.expenseName}
                  </div>
                  <div className="details-date">
                    Date of Expense : {moment(element.date,"DD-MM-YYYY").format("MMM Do YY")}
                  
                  </div>

                  <div className="details-amount">
                    Expense Amount : { element.amount }
                  </div>

                  <div className="details-des">
                    Description : {element.description }
                  </div>
                  <div className="button-shape">
                    <button value="delete" id="delete" className="delete-button">
                      Delete
                    </button>
                  </div>
            </div>
          </div>
          ))}
        </div>
      </section>
    </div>
  );
}
