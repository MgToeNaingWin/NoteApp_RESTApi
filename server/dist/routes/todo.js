import { Router } from "express";
import { createNewTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todo.js";
const router = Router();
router.post("/create", createNewTodo);
router.get("/todos", getTodos);
router.get("/todos/:TodoID", getTodo);
router.put("/update/:TodoID", updateTodo);
router.delete("/delete/:TodoID", deleteTodo);
export default router;
//# sourceMappingURL=todo.js.map