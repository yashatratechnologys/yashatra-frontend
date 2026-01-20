import { useEffect, useState } from "react";
import api from "../../services/api";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    api.get("/contact").then((res) => setContacts(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Contact Enquiries</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.phone}</td>
                <td className="p-3">{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Contacts;
