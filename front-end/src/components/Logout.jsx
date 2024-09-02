import React from "react";
import { useAuth } from "../Context/AuthProvide";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handlelogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      window.location.reload();
    } catch (e) {
      console.error("Failed to log out:", e);
      alert("Failed to log out. Please try again."); // Replace with a more robust error handling mechanism in a production environment.
    }
  };

  return (
    <div>
      <button
        className="px-4 py-2 border border-black text-black bg-white rounded hover:bg-black hover:text-white transition"
        onClick={handlelogout}
      >
        Logout
      </button>
    </div>
  );
}
export default Logout;
