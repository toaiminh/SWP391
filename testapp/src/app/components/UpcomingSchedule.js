// components/UpcomingSchedule.js
"use client";

import React from "react";
import { CalendarDays, Clock } from "lucide-react";

function UpcomingSchedule({ events = [] }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-300">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Lịch trình sắp tới</h3>
      <ul className="space-y-4">
        {events.length === 0 ? (
          <li className="text-gray-500 text-sm">Không có sự kiện nào sắp tới.</li>
        ) : (
          events.map((event, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="mt-1">
                <span className="inline-block w-2 h-2 rounded-full mr-2 bg-gray-800"></span>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">{event.title}</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <CalendarDays className="w-4 h-4 mr-1 text-gray-700" /> {event.date} &nbsp;
                  <Clock className="w-4 h-4 mr-1 ml-3 text-gray-700" /> {event.time}
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default UpcomingSchedule;
