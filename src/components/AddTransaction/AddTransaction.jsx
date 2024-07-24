import React from "react";

import "./AddTransaction.css";

const AddTransaction = () => {
  return (
    <div className="add-transaction">
      <div className="transaction-container">
        <h2>Add Transaction</h2>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input type="number" required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Expense</option>
              <option>Income</option>
            </select>
          </div>
          <div className="form-group-date">
            <label>Date</label>
            <input type="date" required />
          </div>
          <button>Save Trancaction</button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
