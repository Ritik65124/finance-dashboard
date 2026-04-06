import { useStore } from "./store/useStore";
import { useState } from "react";
import Summary from "./components/Summary";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

export default function App() {
  const [dark, setDark] = useState(false);
  const { role, setRole } = useStore();

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="p-2 rounded"
        >

          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>

      </div>

      <Summary />
      <Charts />
      <Transactions />
      <Insights />
    </div>
  );
}