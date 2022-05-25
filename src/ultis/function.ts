
import { Todo } from "../types/Todo";
export const getMaxId = (arr: Todo[]) => {
  let id
  if(arr.length === 1) {
    id = arr[0].id + 1
  } else if (arr.length > 1) {
    const listArrId = arr.map(obj => obj.id);
    const maxId = Math.max(...listArrId);
    id = maxId + 1;
  } else {
    id = 1;
  }
  return id
}