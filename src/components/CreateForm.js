import React, { useState } from "react";
import { CreateSuggestion } from "../Api/Api";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      
      const data = await CreateSuggestion(formData) ;

      console.log('data submitted successfully' , data) ;

      setFormData({title:"", description:"" , category:""})

    } catch (error) {
      
      console.log('error occured', error)
    }
    
  };

  return (
    <div className="flex items-center justify-center py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-10 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600">
          Create New Entry
        </h2>

        {/* Title Input */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        {/* Description Textarea */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            rows="4"
            required
          />
        </div>

        {/* Category Select Dropdown */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          >
            <option value="">-- Select Category --</option>
            <option value="683776214dd6c55059482240">Bug</option>
            <option value="683776294dd6c55059482242">Feature</option>
            <option value="683776354dd6c55059482244">Improvement</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md font-semibold hover:bg-pink-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
