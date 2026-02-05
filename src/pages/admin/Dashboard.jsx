const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Contacts</h3>
          <p className="text-gray-600 mt-2">
            View all contact enquiries received from website.
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Registrations</h3>
          <p className="text-gray-600 mt-2">
            View student admission / registration submissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
