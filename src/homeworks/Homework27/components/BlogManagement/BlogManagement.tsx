import { useState, ChangeEvent, createContext } from "react";

import Button from "components/Button";
import { Card } from "homeworks/Homework27/components";

import { BlogManagementWrapper } from "./styles";

export const BlogManagementContext = createContext("");

function BlogManagement() {
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [postMessage, setPostMessage] = useState<string>('');

  console.log(textAreaValue);

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <BlogManagementContext.Provider value={postMessage}>
      <BlogManagementWrapper>
        <textarea value={textAreaValue} onChange={onChangeTextArea} />
        <Button
          name="Запостить"
          onClick={() => {
            setPostMessage(textAreaValue);
          }}
        />
        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}

export default BlogManagement;
