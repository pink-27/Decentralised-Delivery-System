import React from "react";
import Card from "../Card"; // Replace this with the actual path to your Card component
import { Link,  Navigate } from "react-router-dom";


function Home({ connectedAccount }) {
    if(!connectedAccount){
        return <Navigate replace to="/login" />;

    }
  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-blue-900">
      {/* Render 30 instances of the Card component */}
      {Array.from({ length: 30 }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
}

export default Home;
