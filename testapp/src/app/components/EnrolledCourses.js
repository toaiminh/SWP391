// components/EnrolledCourses.js
import React from "react";
import CourseCard from "./CourseCard";

const EnrolledCourses = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return <p>Bạn chưa tham gia khóa học nào.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Khóa học đang tham gia</h2>
      <div className="space-y-4">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            progress={course.progress}
            status={course.status}
            buttonLabel={course.buttonLabel}
            onButtonClick={course.onButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;