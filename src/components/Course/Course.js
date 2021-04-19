import React from "react";

const Course = ({ authors, img, price, title }) => {
  const allAuthors = authors.join(", ");

  return (
    <article className="course-card">
      <h3 className="course-card__title"></h3>
      <img alt={title} className="course-card__image" src={img} />
      <p className="course-card__price">{`Koszt kursu: ${price}zł`}</p>
      <p className="course-card__authors">{`Autorzy kursu ${allAuthors}`}</p>
    </article>
  );
};

export default Course;
