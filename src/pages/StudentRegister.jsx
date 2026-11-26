import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../components/FormSchema/registerschema";
import { useNavigate, Link } from "react-router-dom";

function StudentRegister() {
  const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(registerSchema)
});

  const navigate = useNavigate();

 function handleRegister(data) {
  console.log(data);
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

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

          <div>
            <label className="block mb-2">Student Name</label>
            <input type="text" placeholder="Enter your name" {...register("name")} className="w-full border p-3 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>

          <div>
            <label className="block mb-2">Register Number</label>
            <input type="text" placeholder="Enter your Register Number" {...register("registerNumber")} className="w-full border p-3 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.registerNumber?.message}</p>
          </div>

          <div>
            <label className="block mb-2">College Email ID</label>
            <input type="email" placeholder="Enter your College Email ID" {...register("email")} className="w-full border p-3 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>          
          </div>

          <div>
            <label className="block mb-2">Password</label>
            <input type="password" placeholder="Enter your Password" {...register("password")} className="w-full border p-3 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>          
          </div>

          <div>
            <label className="block mb-2">Phone Number</label>
            <input type="tel" placeholder="Enter your Phone Number" {...register("phone")} className="w-full border p-3 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.phone?.message}</p>          
          </div>

          <div>
            <label className="block mb-2">Hostel Block</label>
            <input type="text" placeholder="Enter your HostelBlock" {...register("hostelBlock")} className="w-full border p-3 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.hostelBlock?.message}</p>          
          </div>

          <div>
            <label className="block mb-2">Room Number</label>
            <input type="text" placeholder="Enter your Room Number" {...register("roomNumber")} className="w-full border p-3 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.roomNumber?.message}</p>          
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Register</button>

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
