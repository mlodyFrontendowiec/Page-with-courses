import React, { useContext, useState } from "react";
import request from "../../../helpers/request";
import { StoreContext } from "../../../store/StoreProvider";
import Modal from "../../Modal/Modal";

const CoursePopup = ({
  authors = [],
  hidePopup,
  isEditMode = true,
  isOpenPopup,
  id,
  img = "",
  price = 0,
  title = "",
}) => {
  const [formAuthors, setFormAuthors] = useState(authors);
  const [formAuthor, setAuthor] = useState("");
  const [formImg, setFormImg] = useState(img);
  const [formPrice, setFormPrice] = useState(price);
  const [formTitle, setformTitle] = useState(title);

  const { setCourses } = useContext(StoreContext);

  const handleOnChangeAuthor = (event) => setAuthor(event.target.value);
  const handleOnChangeImg = (event) => setFormImg(event.target.value);
  const handleOnChangePrice = (event) => setFormPrice(event.target.value);
  const handleOnChangeTitle = (event) => setformTitle(event.target.value);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const courseObject = {
      authors: formAuthors,
      id,
      img: formImg,
      price: Number(formPrice),
      title: formTitle,
    };

    if (isEditMode) {
      const { data, status } = await request.put("/courses", courseObject);
      courseObject.id = id;
      if (status === 202) {
        setCourses(data.courses);
      }
    } else {
      const { data, status } = await request.post("/courses", courseObject);

      if (status === 201) {
        setCourses(data.courses);
      }
    }
    hidePopup();
  };

  const addAuthor = (event) => {
    event.preventDefault();
    setFormAuthors((prev) => [...prev, formAuthor]);
    setAuthor("");
  };

  const deleteAuthor = (event) => {
    const authorToDelete = event.target.dataset.author;
    setFormAuthors((prev) =>
      prev.filter((author) => author !== authorToDelete)
    );
  };

  const authorsElements = formAuthors.map((author) => (
    <li key={author}>
      <p>{author}</p>
      <button data-author={author} onClick={deleteAuthor}>
        Usuń
      </button>
    </li>
  ));

  const correctLabel = isEditMode ? "Update course" : "Create course";

  return (
    <Modal handleOnClose={hidePopup} isOpen={isOpenPopup}>
      <div className="course-popup" style={{ padding: "50px" }}>
        <form
          className="course-popup__form"
          method="submit"
          onSubmit={handleOnSubmit}
        >
          <div className="course-popup__form-row">
            <label>
              Author:
              <input
                type="text"
                value={formAuthor}
                onChange={handleOnChangeAuthor}
              />
              <button onClick={addAuthor}>Add author</button>
            </label>
          </div>
          <div className="course-popup__form-row">
            <label>
              Image url:
              <input type="text" value={formImg} onChange={handleOnChangeImg} />
            </label>
          </div>
          <div className="course-popup__form-row">
            <label>
              Price:
              <input
                type="text"
                type="number"
                value={formPrice}
                onChange={handleOnChangePrice}
              />
            </label>
          </div>
          <div className="course-popup__form-row">
            <label>
              Title:
              <input
                type="text"
                value={formTitle}
                onChange={handleOnChangeTitle}
              />
            </label>
          </div>

          <button type="submit">{correctLabel}</button>
          <button onClick={hidePopup} type="button">
            Cancel
          </button>
        </form>
        <p>List of authors:</p>
        <ul>{authorsElements}</ul>
      </div>
    </Modal>
  );
};

export default CoursePopup;
