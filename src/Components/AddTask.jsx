import React, { use } from 'react';
import { AuthContext } from '../Firebase/AuthContext';

const AddTask = () => {
    const{user}= use(AuthContext)

  const handleAddTask = e => {
    e.preventDefault();
    const form = e.target;

    // Convert form data to object
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
       newTask.userId = user.uid;

    console.log('New Task:', newTask);

    // Send to server
    fetch('https://freeee-lovat.vercel.app/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {console.log('Task added:', data)
form.reset()
      })
      .catch(err => console.error('Error:', err));

      
  };

  return (
   <div className="bg-blue-950 min-h-screen">
      <div className="p-24">
        <div className="text-center p-12 space-y-3.5">
          <h1 className="text-6xl text-white font-bold">ADD NEW TASK</h1>
        </div>

        <form onSubmit={handleAddTask}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Posted By (readonly) */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Posted By</legend>
              <input
                type="text"
                name='email'
                className="input w-full bg-gray-800"
                value={user?.email || ""}
                readOnly
              />
            </fieldset>

            {/* Title */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Title</legend>
              <input type="text" className="input w-full" placeholder="Enter Job Title" name="name" required />
            </fieldset>

            {/* Description */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Description</legend>
              <textarea
                className="textarea w-full"
                placeholder="Enter Job Description"
                name="description"
                rows={4}
                required
              />
            </fieldset>

            {/* Deadline */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Deadline</legend>
              <input type="date" className="input w-full" name="deadline" required />
            </fieldset>

            {/* Priority */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Priority</legend>
              <select name="priority" className="select select-bordered w-full" defaultValue="" required>
                <option value="" disabled>Select Priority</option>
                <option value="High">High 🔥</option>
                <option value="Medium">Medium ⚡</option>
                <option value="Low">Low 🌱</option>
              </select>
            </fieldset>

            {/* Skill */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Skill Required</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Skill (e.g., Web Development)"
                name="skill"
                required
              />
            </fieldset>

            {/* Budget */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
              <legend className="fieldset-legend">Budget</legend>
              <input type="number" min={0} className="input w-full" placeholder="Enter Job Budget" name="budget" required />
            </fieldset>
          </div>

          {/* Additional Requirements */}
          <fieldset className="fieldset mt-3.5 bg-base-200 border-base-300 rounded-box border p-4">
            <legend className="fieldset-legend">Additional Requirements</legend>
            <input type="text" className="input w-full" placeholder="Enter Additional Requirements" name="attachment" />
          </fieldset>

          <input type="submit" className="btn w-full my-3.5 hover:bg-blue-800" value="Add Task" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
