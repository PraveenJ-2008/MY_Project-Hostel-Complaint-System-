
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function StudentRegister() {
  const [name, setName] = useState("");
  const [registerNumber, setRegisterNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [hostelBlock, setHostelBlock] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    alert("Registration Successful!");

    navigate("/student-login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-2">
          Hostel Complaint System
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Student Registration
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block mb-2">Student Name</label>
            <input type="text" required placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-3 rounded-lg" />
          </div>

          <div>
            <label className="block mb-2">Register Number</label>
            <input type="text" required placeholder="Enter register number" value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} className="w-full border p-3 rounded-lg" />
          </div>

          <div>
            <label className="block mb-2">College Email ID</label>
            <input type="email" required placeholder="Enter college email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-3 rounded-lg" />
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input type="password" required placeholder="Create password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border p-3 rounded-lg" />
          </div>

          <div>
            <label className="block mb-2">Phone Number</label>
            <input type="tel" required placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border p-3 rounded-lg" />
          </div>

          <div>
            <label className="block mb-2">Hostel Block</label>
            <input type="text" required placeholder="Enter hostel block" value={hostelBlock} onChange={(e) => setHostelBlock(e.target.value)} className="w-full border p-3 rounded-lg" />
          </div>

          <div>
            <label className="block mb-2">Room Number</label>
            <input type="text" required placeholder="Enter room number" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} className="w-full border p-3 rounded-lg" />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Register
          </button>

        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <Link to="/student-login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default StudentRegister;
