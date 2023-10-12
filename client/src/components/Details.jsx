import React from "react";
import "./Details.css";
import moment from "moment";

export default function Details({ data, setDataHold }) {
  const HandleDelete = (e) => {
    const id = e.target.value;
    setDataHold(data.filter((element) => element.id !== id));
    console.log(id);
  };
  return (
    <div>
      <section className="details">
        <div className="details-card">
          {data.toReversed().map((element, i) => (
            <div key={i} className="details-content">
              <div className="details-container">
                <div className="details-name">
                  Expense Name : {element.expenseName}
                </div>
                <div className="details-date">
                  Date of Expense : {moment(element.date).format("YYYY-MM-DD")}
                </div>

                <div className="details-amount">
                  Expense Amount : {element.amount}
                </div>

                <div className="details-des">{element.description}</div>
                <div className="button-shape">
                  <button
                    value={element.id}
                    id="delete"
                    className="delete-button"
                    onClick={HandleDelete}
                  >
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
