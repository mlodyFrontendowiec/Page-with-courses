import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router";
import request from "../../helpers/request";
import { StoreContext } from "../../store/StoreProvider";

const Course = ({ authors, img, price, title, id, isUserContext = false }) => {
  const { user, setUser } = useContext(StoreContext);

  const history = useHistory();

  const allAuthors = authors.join(", ");

  const isUserLogged = Boolean(user);

  const handleOnClick = async () => {
    try {
      const { data, status } = await request.patch("/users", {
        login: user.login,
        courseId: id,
      });

      if (status === 202) {
        setUser(data.user);
        history.push("/my-courses");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const shouldBeBuyButtonVisible = isUserLogged && !isUserContext;

  return (
    <article className="course-card">
      <h3 className="course-card__title">{title}</h3>
      <img alt={title} className="course-card__image" src={img} />
      <p className="course-card__price">{`Koszt kursu: ${price}zł`}</p>
      <p className="course-card__authors">{`Autorzy kursu ${allAuthors}`}</p>
      {shouldBeBuyButtonVisible && (
        <button onClick={handleOnClick}>Zakup ten kurs</button>
      )}
    </article>
  );
};

export default Course;
