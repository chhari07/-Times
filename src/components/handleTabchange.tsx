"use client";
import React, { useState, useEffect } from "react";
import { WobbleCard } from "@/components/WobbleCard"; // Assuming you've imported it from its location
import { Tabs } from "@/components/ui/tabs"; // Assuming you've imported the Tabs component
import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // Utility class for conditionally combining classes

const NewsTabs = () => {
  const [newsData, setNewsData] = useState<any[]>([]);
  const [filteredNews, setFilteredNews] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All");

  // Fetch data from News API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-10-22&sortBy=publishedAt&apiKey=39637166808444c5a58f2e3be3b34ec2"
        );
        const data = await response.json();
        setNewsData(data.articles);
        setFilteredNews(data.articles); // Initially showing all articles
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  // Filter news based on selected tab
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "All") {
      setFilteredNews(newsData);
    } else {
      setFilteredNews(newsData.filter((article) => article.category === tab)); // Assuming 'category' exists in the API response
    }
  };

  return (
    <div>
      {/* Tabs Component */}
      <Tabs tabs={["All", "Technology", "Business", "Sports", "Health"]} onTabChange={handleTabChange}>
        <div className="tabs-content">
          {/* Rendering filtered news */}
          {filteredNews.map((article, index) => (
            <WobbleCard key={index} containerClassName="mb-4" className="bg-white">
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="text-sm">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Read More
                </a>
              </div>
            </WobbleCard>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default NewsTabs;
