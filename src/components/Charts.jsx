import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useStore } from "../store/useStore";

export default function Charts() {
  const { transactions } = useStore();

  const data = [
    { name: "Income", value: transactions.filter(t => t.type === "income").reduce((a, b) => a + b.amount, 0) },
    { name: "Expense", value: transactions.filter(t => t.type === "expense").reduce((a, b) => a + b.amount, 0) },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl">
        <PieChart width={300} height={200}>
          <Pie data={data} dataKey="value" outerRadius={80}>
            <Cell fill="#00C49F" />
            <Cell fill="#FF8042" />
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className="bg-white p-4 rounded-xl">
        <LineChart width={300} height={200} data={transactions}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="amount" />
        </LineChart>
      </div>
    </div>
  );
}