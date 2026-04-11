import { Link, useNavigate } from "react-router-dom";

export default function DashboardNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </Link>

        <Link
          to="/dashboard/seller"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          your selling
        </Link>


      </div>



      <button
        type="button"
        onClick={handleLogout}
        className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Log out
      </button>
    </div>
  );
}
