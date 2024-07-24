import React from "react";

const Transactions = () => {
  const transactions = [
    { id: 1, date: "2024-07-01", amount: "$50", category: "Groceries" },
    { id: 2, date: "2024-07-02", amount: "$100", category: "Utilities" },
    { id: 3, date: "2024-07-03", amount: "$150", category: "Rent" },
    { id: 4, date: "2024-07-04", amount: "$20", category: "Entertainment" },
    { id: 5, date: "2024-07-05", amount: "$30", category: "Miscellaneous" },
  ];
  return (
    <div className="transactions-history">
      <h2>Transactions History</h2>
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            <span>{t.date}</span>
            <span>{t.amount}</span>
            <span>{t.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
