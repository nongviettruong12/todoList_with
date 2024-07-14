import React from "react";

import TodoItem from "./todo_item";

import { todoListSelector } from "../store/selector";
import { useRecoilValue } from "recoil";

export default function TodoList(){
    const todos = useRecoilValue(todoListSelector);
    return (
        <div className="todo-list">
            {todos.map((item, index) => (
                <TodoItem key={item.name} item={item} index={index} />
            ))}
        </div>
    )
}