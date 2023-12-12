import { useContext } from "react";

import { BlogManagementContext } from "homeworks/Homework27/components/BlogManagement/BlogManagement";

function Message() {
  const message = useContext(BlogManagementContext);

  return <p>{message}</p>;
}

export default Message;
