import { useStore } from "../store/useStore";
import { useState } from "react";
export default function Transactions() {
    const { transactions, role, addTransaction } = useStore();
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("income");
    const filtered = transactions.filter(t => {
        return (
            t.category.toLowerCase().includes(search.toLowerCase()) &&
            (filter === "all" || t.type === filter)
        );
    });
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="bg-white p-4 rounded-2xl shadow-md mb-6">
            <h2 className="font-bold mb-3">Transactions</h2>

            {role === "admin" && (
                <button
                    onClick={() => setShowModal(true)}
                    className="mb-3 bg-blue-500 text-white px-3 py-1 rounded"
                >
                    + Add Transaction
                </button>
            )}

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                    placeholder="Search category..."
                    className="p-2 border rounded"
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-center border">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Type</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filtered.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-500 py-4">
                                    No transactions found
                                </td>
                            </tr>
                        ) : (
                            filtered.map((t) => (
                                <tr key={t.id} className="text-center hover:bg-gray-100 transition">
                                    <td>{t.date}</td>
                                    <td>₹{t.amount}</td>
                                    <td>{t.category}</td>
                                    <td>{t.type}</td>
                                </tr>
                            )
                            ))}
                    </tbody>
                </table>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

                    <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] max-w-sm">
                        <h2 className="mb-3 font-bold">Add Transaction</h2>

                        <input
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full mb-2 p-2 border rounded"
                        />

                        <input
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full mb-2 p-2 border rounded"
                        />

                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full mb-2 p-2 border rounded"
                        >
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>

                        <div className="flex justify-between mt-3">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {

                                    if (!amount || !category) {
                                        alert("Please fill all fields");
                                        return;
                                    }

                                    const newTx = {
                                        id: Date.now(),
                                        date: new Date().toISOString().split("T")[0],
                                        amount: Number(amount),
                                        category,
                                        type,
                                    };

                                    addTransaction(newTx);

                                    setAmount("");
                                    setCategory("");
                                    setType("income");
                                    setShowModal(false);
                                }}
                                className="bg-green-500 text-white px-3 py-1 rounded"
                            >
                                Add
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}