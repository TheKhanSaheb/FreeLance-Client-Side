import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Firebase/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyPostedTask = () => {
  const jobs = useLoaderData(); // Loaded jobs from loader
  const { user } = useContext(AuthContext);
  console.log(jobs._id)

  // State for my jobs (filtered by logged-in user's email)
  const [myJobs, setMyJobs] = useState(
    jobs.filter((job) => job.email === user.email)
  );

  // Handle update
  

  // Handle delete with SweetAlert2
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://210-qav2gpe8y-rakins-projects-4190f75f.vercel.app/jobs/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyJobs((prevJobs) =>
                prevJobs.filter((job) => job._id !== id)
              );
              Swal.fire({
                title: "Deleted!",
                text: "Your job has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.error("Delete error:", err));
      }
    });
  };

  return (
    <div className="bg-blue-900 min-h-screen p-8 flex flex-col items-center space-y-6">
      <h1 className="text-5xl font-extrabold text-white mb-8 text-center">
        My Posted Tasks
      </h1>

      {myJobs.length === 0 ? (
        <p className="text-white text-xl">You have not posted any tasks yet.</p>
      ) : (
        myJobs.map((job) => (
          <div
            key={job._id}
            className="bg-blue-800 text-white rounded-xl p-6 w-full max-w-4xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-3 border-b border-blue-600 pb-2">
              {job.name}
            </h2>
            <p className="mb-1">
              <span className="font-semibold">Description:</span>{" "}
              {job.description}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Priority:</span> {job.priority}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Deadline:</span> {job.deadline}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Skill:</span> {job.skill}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Budget:</span> ${job.budget}
            </p>
            <p className="mb-3">
              <span className="font-semibold">Additional Req:</span>{" "}
              {job.attachment}
            </p>
            <div className="flex justify-end space-x-3 mt-3">
              <button
                onClick={() => handleDelete(jobs._id)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
              >
                Delete
              </button>
           <Link to={`/update/${job._id}`}>
  <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition">
    Update
  </button>
</Link>


        
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPostedTask;
