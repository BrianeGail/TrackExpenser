import React from 'react';

const TotalAmount = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="mt-6 bg-custom-light p-4 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold text-custom-text">Total Expenses</h2>
      <p className="text-3xl font-bold text-custom-orange">${total.toFixed(2)}</p>
    </div>
  );
};

export default TotalAmount;
