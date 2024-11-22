"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; // Import your InfiniteMovingCards component

const Authors = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Define an async function to fetch the API data
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
        const data = await response.json();

        // Ensure articles exist before mapping
        if (Array.isArray(data.articles)) {
          const fetchedTestimonials = data.articles.map((article: { title: string; author: string | null; }) => ({
            quote: article.title || 'No Quote Available', // Fallback for quote
            name: article.author || 'No Author Provided', // Fallback for author name
            designation: 'Health Writer', // Placeholder for the designation
            src: 'https://via.placeholder.com/150', // Placeholder image
          }));
          setTestimonials(fetchedTestimonials);
        } else {
          console.error('No articles found in the API response');
        }
      } catch (error) {
        console.error('Error fetching the API:', error);
      }
    };

    // Call the async function inside useEffect
    fetchTestimonials();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  console.log(testimonials); // Log the testimonials to ensure they are formatted correctly

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="text-3xl mt-28 mb-5 lg:mt-1 md:text-7xl font-bold dark:text-white text-center">
      Top Authors
      </div>
      {/* Pass the fetched testimonials to InfiniteMovingCards */}
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
};

export default Authors;
