import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザー: ${userId})`}</p>;
};
