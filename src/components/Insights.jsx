import { useStore } from "../store/useStore";

export default function Insights() {
  const { transactions } = useStore();

  const expenses = transactions.filter(t => t.type === "expense");

  const categoryMap = {};
  expenses.forEach(t => {
    categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const highest = Object.entries(categoryMap).sort((a,b)=>b[1]-a[1])[0];

  return (
    <div className="bg-white p-4 rounded-xl">
      <h2 className="font-bold">Insights</h2>

      {highest && (
        <p>Highest spending: {highest[0]} (₹{highest[1]})</p>
      )}
    </div>
  );
}