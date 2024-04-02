import { selector } from "recoil";
import { todoListState } from "../atoms/Todo";

export const todos = selector({
    key: 'todos',
    get: ({get}) => {
        const todos = get(todoListState);
        return todos;
    }
})