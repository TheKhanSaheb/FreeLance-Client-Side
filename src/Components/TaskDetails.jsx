import React from 'react';
import { use } from 'react';
import { useLoaderData, useParams } from 'react-router';
          import  { useContext } from "react";
import {  useNavigate } from "react-router";
import { AuthContext } from "../Firebase/AuthContext";

const TaskDetails = () => {
    const id =useParams();
    

    const data =useLoaderData();


      const job = useLoaderData(); 
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  
 
  



  return (
    <div className="min-h-screen bg-blue-900 flex justify-center items-start py-12 px-4">
      <div className="bg-blue-800 text-white rounded-2xl shadow-xl w-full max-w-4xl p-8 space-y-6">
        <h1 className="text-4xl font-bold border-b border-blue-600 pb-2">{job.name}</h1>

        <div className="space-y-3">
          <p><span className="font-semibold">Posted By:</span> {job.email}</p>
          <p><span className="font-semibold">Description:</span> {job.description}</p>
          <p><span className="font-semibold">Deadline:</span> {job.deadline}</p>
          <p><span className="font-semibold">Priority:</span> {job.priority}</p>
          <p><span className="font-semibold">Skill:</span> {job.skill}</p>
          <p><span className="font-semibold">Budget:</span> ${job.budget}</p>
          <p><span className="font-semibold">Additional Requirements:</span> {job.attachment}</p>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={() => navigate("/BrowseTask")}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition"
          >
            Back to BrowseTask
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;













            
    
