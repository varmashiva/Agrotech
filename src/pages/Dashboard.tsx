import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Upload, MessageSquare, CloudRain } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to SmartSoil</h1>
        <p className="mt-2 text-gray-600">Your AI-powered farming assistant</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          icon={<Upload className="h-8 w-8 text-blue-500" />}
          title="Soil Analysis"
          description="Upload soil data or photos for instant AI analysis"
          link="/soil-analysis"
        />
        <DashboardCard
          icon={<BarChart className="h-8 w-8 text-green-500" />}
          title="Analytics"
          description="View historical trends and predictions"
          link="/analytics"
        />
        <DashboardCard
          icon={<MessageSquare className="h-8 w-8 text-purple-500" />}
          title="Community"
          description="Connect with other farmers"
          link="/community"
        />
        <DashboardCard
          icon={<CloudRain className="h-8 w-8 text-cyan-500" />}
          title="Weather"
          description="Real-time weather forecasts"
          link="/weather"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Soil Health Overview</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Soil health visualization will appear here</p>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        {icon}
        <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <Link to={link} className="mt-4 text-green-600 hover:text-green-700 font-medium">
          Learn More →
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;