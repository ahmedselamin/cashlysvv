import React from "react";

const AddTransaction = () => {
  return (
    <div className="transaction-container">
      <form>
        <div className="form-group">
          <label>Amount</label>
          <input type="number" required />
        </div>
        <div className="form-group">
          <label>title</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" required />
        </div>
        <div className="form-group">
          <label>category</label>
          <select>
            <option>Expense</option>
            <option>Income</option>
          </select>
        </div>
        <button>Save Trancaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
