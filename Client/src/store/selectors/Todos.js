import { selector } from "recoil";
import { todoListState } from "../atoms/Todo";

const todos = selector({
    key: 'todos',
    get: ({get}) => {
        const todos = get(todoListState);
        return todos;
    }
})