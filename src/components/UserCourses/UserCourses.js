import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "../Course/Course";

const UserCourses = () => {
  const { user, courses } = useContext(StoreContext);

  const buyedCourses = courses
    .filter((course) => user.courses.includes(course.id))
    .map((course) => <Course key={course.id} {...course} />);

  return (
    <section className="user-courses">
      <h2 className="user-courses__title">Twoje wykupione kursy</h2>
      <ul className="user-courses__list">{buyedCourses}</ul>
    </section>
  );
};

export default UserCourses;
