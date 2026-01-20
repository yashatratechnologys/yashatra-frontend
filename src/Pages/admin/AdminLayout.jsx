import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate(); // ✅ INSIDE component

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-blue-800 text-white"
      : "text-gray-200 hover:bg-blue-700";

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

          <nav className="space-y-3">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                `${linkClass({ isActive })} block px-4 py-2 rounded`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/contacts"
              className={({ isActive }) =>
                `${linkClass({ isActive })} block px-4 py-2 rounded`
              }
            >
              Contacts
            </NavLink>

            <NavLink
              to="/admin/registrations"
              className={({ isActive }) =>
                `${linkClass({ isActive })} block px-4 py-2 rounded`
              }
            >
              Registrations
            </NavLink>
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;
