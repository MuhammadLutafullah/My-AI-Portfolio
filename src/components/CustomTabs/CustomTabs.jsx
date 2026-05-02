import React, { useState } from "react";
import Projects from "../Projects/Projects";

const CustomTabs = () => {
  const [dynamicTab, setDynamicTab] = useState("Tab 2");

  const handleInputChange = (e) => {
    setDynamicTab(e.target.value);
  };

  const [activeTab, setActiveTab] = useState("static");

  return (
    <div className="p-4 ">
      {/* Tabs */}
      <div className="flex justify-center">
        <button
          onClick={() => setActiveTab("static")}
          className={`px-4 py-2 ${
            activeTab === "static"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab("dynamic")}
          className={`px-4 py-2 ${
            activeTab === "dynamic"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          {dynamicTab}
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "static" && (
          <div>
            <Projects />
          </div>
        )}
        {activeTab === "dynamic" && (
          <div>
            <Projects />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomTabs;
