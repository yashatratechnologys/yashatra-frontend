import { useEffect, useState } from "react";
import api from "../../services/api";

const Registrations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/register").then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Registrations</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Course</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r) => (
              <tr key={r._id} className="border-t">
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.email}</td>
                <td className="p-3">{r.phone}</td>
                <td className="p-3">{r.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registrations;
