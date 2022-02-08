import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeShowName, CHANGE_NAME } from "../../store/profile/actions";
import { ThemeContext } from "../../utils/ThemeContext";
import { Form } from "../Form";

export const Profile = () => {
  const { setMessageColor } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { showName, name } = useSelector((state) => state);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  const handleClick = () => {
    setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  const handleChangeName = (text) => {
    dispatch({
      type: CHANGE_NAME,
      payload: text,
    });
  };

  return (
    <>
      <h3>Profile</h3>
      <div>
        <button onClick={handleClick}>Change theme</button>
      </div>
      <div>
        {showName && <span>{name}</span>}
        <input type="checkbox" />
        <button onClick={handleChangeShowName}>Change show name</button>
      </div>
      <Form onSubmit={handleChangeName} />
    </>
  );
};

// redux toolkit