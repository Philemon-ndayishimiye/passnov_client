import React, { useEffect, useState } from 'react';
import { Getcategory } from '../Api/Api';

export default function Bugs() {
  const [bugsData, setBugsData] = useState(null);

  useEffect(() => {
    async function getCategoryData() {
      try {
        const data = await Getcategory();
        console.log(" Full API response:", JSON.stringify(data, null, 2));
        setBugsData(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }

    getCategoryData();
  }, []);

  if (!bugsData) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="px-4 sm:px-6 md:px-10 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white text-center">All From Bugs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {bugsData.categ.suggestions.map((bug) => (
          <div key={bug._id} className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-pink-600 mb-2">{bug.title}</h3>
            <p className="text-gray-700 text-sm md:text-base mb-2">description</p>
            <p className="text-xs md:text-sm text-gray-500 mb-4">{bugsData.categ.title}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-pink-700 font-semibold">0</span>
              <button className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 text-xs md:text-sm">
                Upvot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
