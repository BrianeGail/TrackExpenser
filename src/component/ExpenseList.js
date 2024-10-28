import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-custom-text">Expense List</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses added yet.</p>
      ) : (
        <ul className="space-y-4">
          {expenses.map((expense) => (
            <li key={expense.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between">
              <div>
                <p className="text-lg font-semibold">{expense.name}</p>
                <p className="text-sm text-gray-500">{expense.date.toLocaleDateString()}</p>
              </div>
              <div className="text-lg font-bold text-custom-orange">${expense.amount.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
