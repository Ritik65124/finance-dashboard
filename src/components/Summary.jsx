import { useStore } from "../store/useStore";

export default function Summary() {
  const { transactions } = useStore();

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} />
      <Card title="Expense" value={expense} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-gray-500">{title}</h2>
      <p className="text-xl font-bold">₹{value}</p>
    </div>
  );
}