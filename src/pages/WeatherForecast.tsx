import React from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';

function WeatherForecast() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Weather Forecast</h1>
        <p className="mt-2 text-gray-600">Real-time weather data and agricultural forecasts</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Current Conditions</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Sun className="h-16 w-16 text-yellow-500" />
              <div>
                <p className="text-4xl font-bold text-gray-800">24°C</p>
                <p className="text-gray-600">Sunny</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-600">Humidity: 65%</p>
              <p className="text-gray-600">Wind: 12 km/h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Agricultural Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Soil Temperature</p>
              <p className="text-2xl font-bold text-gray-800">18°C</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Precipitation Chance</p>
              <p className="text-2xl font-bold text-gray-800">30%</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">UV Index</p>
              <p className="text-2xl font-bold text-gray-800">6</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Evaporation Rate</p>
              <p className="text-2xl font-bold text-gray-800">2.4 mm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">5-Day Forecast</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <ForecastDay
            day="Monday"
            icon={<Sun className="h-8 w-8 text-yellow-500" />}
            high={26}
            low={18}
          />
          <ForecastDay
            day="Tuesday"
            icon={<CloudRain className="h-8 w-8 text-blue-500" />}
            high={24}
            low={17}
          />
          <ForecastDay
            day="Wednesday"
            icon={<Cloud className="h-8 w-8 text-gray-500" />}
            high={23}
            low={16}
          />
          <ForecastDay
            day="Thursday"
            icon={<Sun className="h-8 w-8 text-yellow-500" />}
            high={25}
            low={17}
          />
          <ForecastDay
            day="Friday"
            icon={<Wind className="h-8 w-8 text-blue-500" />}
            high={22}
            low={15}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Agricultural Advisory</h2>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-medium text-green-800">Optimal Farming Conditions</h3>
            <p className="mt-1 text-green-600">
              Current conditions are favorable for planting. Consider irrigation in the evening.
            </p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-medium text-yellow-800">Weather Warning</h3>
            <p className="mt-1 text-yellow-600">
              High UV index expected. Protect sensitive crops during peak hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ForecastDay({ day, icon, high, low }: {
  day: string;
  icon: React.ReactNode;
  high: number;
  low: number;
}) {
  return (
    <div className="text-center p-4 bg-gray-50 rounded-lg">
      <p className="text-gray-600">{day}</p>
      <div className="my-2">{icon}</div>
      <div className="space-x-2">
        <span className="text-gray-800 font-medium">{high}°</span>
        <span className="text-gray-500">{low}°</span>
      </div>
    </div>
  );
}

export default WeatherForecast;