import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthContext";

const Update = () => {
  const job = useLoaderData();
  const {id} =useParams()
  console.log(id)
  
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedJob = {
      email: user?.email,
      name: form.name.value,
      description: form.description.value,
      deadline: form.deadline.value,
      priority: form.priority.value,
      skill: form.skill.value,
      budget: form.budget.value,
      attachment: form.attachment.value,
    };

    fetch(`https://210-qav2gpe8y-rakins-projects-4190f75f.vercel.app/jobs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Job updated successfully.", "success");
          navigate("/PostedTask");
        }
      });
  };

  return (
    <div className="bg-blue-950 min-h-screen">
      <div className="p-24">
        <h1 className="text-6xl text-white font-bold text-center mb-12">UPDATE TASK</h1>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="email" className="input w-full bg-gray-800" value={user?.email || ""} readOnly />
            <input type="text" name="name" className="input w-full" defaultValue={job?.name} required />
            <textarea name="description" className="textarea w-full" rows={4} defaultValue={job?.description} required />
            <input type="date" name="deadline" className="input w-full" defaultValue={job?.deadline} required />
            <select name="priority" className="select select-bordered w-full" defaultValue={job?.priority} required>
              <option value="" disabled>Select Priority</option>
              <option value="High">High 🔥</option>
              <option value="Medium">Medium ⚡</option>
              <option value="Low">Low 🌱</option>
            </select>
            <input type="text" name="skill" className="input w-full" defaultValue={job?.skill} required />
            <input type="number" name="budget" className="input w-full" defaultValue={job?.budget} required />
          </div>
          <input type="text" name="attachment" className="input w-full mt-3.5" defaultValue={job?.attachment} />
          <input type="submit" className="btn w-full my-3.5 hover:bg-blue-800" value="Update Task" />
        </form>
      </div>
    </div>
  );
};

export default Update;
