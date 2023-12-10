import Login from "../components/Login";
import { usersList } from "../constant/users";

function Logins() {
  return (
    <>
      <Login usersList={usersList} />
    </>
  );
}

export default Logins;
