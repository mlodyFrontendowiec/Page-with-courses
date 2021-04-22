import React, { useState, useContext, useEffect } from "react";
import request from "../../helpers/request";
import { StoreContext } from "../../store/StoreProvider";
import Modal from "../Modal/Modal";

const LoginForm = ({ handleOnClose, isModalOpen }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const { setUser } = useContext(StoreContext);

  const handleOnChangeLogin = ({ target: { value } }) => setLogin(value);
  const handleOnChangePassword = ({ target: { value } }) => setPassword(value);
  const handleOnCloseModal = (event) => {
    event.preventDefault();
    handleOnClose();
  };

  const resetStateOfInput = () => {
    setLogin("");
    setPassword("");
    setValidateMessage("");
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { data, status } = await request.post("/users", { login, password });
    if (status === 200) {
      setUser(data.user);
      resetStateOfInput();
      handleOnClose();
    } else {
      setValidateMessage(data.message);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      resetStateOfInput();
    }
  }, [isModalOpen]);

  const validateMessageComponent = validateMessage.length ? (
    <p className="login-form__validate-message">{validateMessage}</p>
  ) : null;

  return (
    <Modal
      isOpen={isModalOpen}
      shouldBeCloseonOutsideClick={true}
      handleOnClose={handleOnClose}
    >
      {validateMessage}
      <form className="login-form" method="post" onSubmit={handleOnSubmit}>
        <div className="row">
          <label>
            Login:
            <input onChange={handleOnChangeLogin} type="text" value={login} />
          </label>
        </div>
        <div className="login-form__row">
          <label>
            Password:
            <input
              onChange={handleOnChangePassword}
              type="password"
              value={password}
            />
          </label>
        </div>
        <div className="row">
          <button type="submit">Sign In</button>
          <button onClick={handleOnClose} type="button">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginForm;
