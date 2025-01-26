import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            This app will give you multiple application experience in one app.
            Here, we provide you Social Media and Task Management System. You
            start your journey by just click on Get Started.
          </p>
          <Link
            to="/login"
            className="btn btn-primary bg-blue-500 text-white hover:bg-blue-700 rounded-md"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
