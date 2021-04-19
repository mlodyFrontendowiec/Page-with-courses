import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "../Course/Course";

const Courses = () => {
  const { courses } = useContext(StoreContext);

  const coursesElement = courses.map((course) => (
    <Course key={course.id} {...course} />
  ));

  return (
    <section className="courses">
      <h2 className="courses__title">Aktualne kursy</h2>
      <div className="courses__list">{coursesElement}</div>
    </section>
  );
};

export default Courses;
