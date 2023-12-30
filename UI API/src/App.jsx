import React, { useState, useEffect } from "react";
import "./App.css";
import "tailwindcss/tailwind.css"; 
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://apiku-ruddy.vercel.app/group");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">GROUP</h1>
      <ul className="list-disc pl-4">
        {data.map((mahasiswa) => (
          <li key={mahasiswa.id} className="mb-2">
            <strong className="text-blue-500">NPM:</strong> {mahasiswa.npm},{" "}
            <strong className="text-blue-500">Name:</strong> {mahasiswa.name},
            <strong className="text-blue-500">Angkatan:</strong>{" "}
            {mahasiswa.angatan}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
