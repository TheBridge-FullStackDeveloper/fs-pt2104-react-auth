import Context from "store";
import { useContext } from "react";
import { Redirect } from "react-router-dom";

import Form from "components/form";

const email = "juan@gmail.com";
const password = "123456";

export default () => {
  const { user, login, register } = useContext(Context);

  const handleClick = () => {
    login({ email, password });
  };

  return user ? (
    <Redirect to="/home" />
  ) : (
    <section>
      <h2>Login page</h2>
      <Form />
      <section>
        <button onClick={handleClick}>Do login</button>
      </section>
    </section>
  );
};
