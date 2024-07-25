import React from "react";
import { useNavigate } from "react-router-dom";

import "./AddTransaction.css";

const AddTransaction = () => {
  const navigate = useNavigate();
  return (
    <div className="add-transaction">
      <div className="transaction-container">
        <button className="back-btn" onClick={() => navigate("/home")}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
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

          <button className="login-btn">Save Trancaction</button>
        </form>
      </div>
    </div>
  );
};

export default AddTransaction;
