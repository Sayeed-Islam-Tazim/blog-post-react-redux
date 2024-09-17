import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

const postAuthor = ({ userId }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => {
    // eslint-disable-next-line eqeqeq
    return user.id == userId;
  });

  return <span>{author ? author.name : "Unknown Author"}</span>;
};

export default postAuthor;
