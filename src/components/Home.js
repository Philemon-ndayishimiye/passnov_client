import React, { useEffect, useState } from "react";
import { getSuggestion, UpdateVotes } from "../Api/Api";

function Home() {
  const [suggest, setSuggest] = useState([]);

  useEffect(() => {
    async function getSuggest() {
      try {
        const Data = await getSuggestion();
        setSuggest(Data);
        console.log(Data);
      } catch (error) {
        console.log("error occurred", error);
      }
    }

    getSuggest();
  }, []);

  async function IncreaseVote(id) {
    try {
      const voteResponse = await UpdateVotes(id);
      console.log("Vote updated for:", id, voteResponse);

      // Refetch suggestion data
      const updateData = await getSuggestion();
      setSuggest(updateData);
    } catch (error) {
      console.error("Error updating vote:", error);
    }
  }

  if (!suggest) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white text-center">
        All Submissions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {suggest.map((sugg) => (
          <div
            key={sugg._id}
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col justify-between"
          >
            <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-1 sm:mb-2">
              {sugg.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base mb-2">
              {sugg.description}
            </p>
            <p className="text-sm text-gray-500 mb-4">{sugg.category.title}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-sm font-semibold text-pink-700">
                {sugg.NumberOfPivot}
              </span>
              <button
                onClick={() => IncreaseVote(sugg._id)}
                className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 text-sm"
              >
                Upvot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
