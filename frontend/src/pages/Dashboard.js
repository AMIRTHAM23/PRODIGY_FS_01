function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold">Welcome {user?.name || 'User'}!</h2>
        <p className="mt-2">You are logged in as <strong>{user?.role}</strong>.</p>
      </div>
    </div>
  );
}

export default Dashboard;
