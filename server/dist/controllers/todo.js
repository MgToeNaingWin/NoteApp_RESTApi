import { Todo } from "../models/todo.js";
export const createNewTodo = async (req, res) => {
    try {
        const { title } = req.body;
        const newTodo = await Todo.create({
            title
        });
        res.status(201).json({
            message: "New Todo Added!",
            todos: newTodo
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Wrong!"
        });
    }
};
export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(201).json({
            message: "All Todo",
            todos: todos
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Wrong!"
        });
    }
};
export const getTodo = async (req, res) => {
    try {
        const { TodoID } = req.params;
        const todo = await Todo.findById(TodoID);
        res.status(200).json({
            message: "Single Todo",
            todo: todo
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Wrong!"
        });
    }
};
export const deleteTodo = async (req, res) => {
    try {
        const { TodoID } = req.params;
        await Todo.findByIdAndDelete(TodoID);
        res.status(201).json({
            message: "Single Todo Deleted"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Wrong!"
        });
    }
};
export const updateTodo = async (req, res) => {
    const { TodoID } = req.params;
    const { title } = req.body;
    const updated = await Todo.findByIdAndUpdate(TodoID, { title });
    try {
        res.status(200).json({
            message: "Single Todo Updated",
            todo: updated
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something Wrong!"
        });
    }
};
//# sourceMappingURL=todo.js.map