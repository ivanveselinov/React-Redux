import configureStore from "../src/store/configureStore";
import { addTask, removeTask, updateTask, fetchTodo } from "./store/tasks";

// subscribed to redux configureStore
const unsubscribe = configureStore.subscribe(() => {
    console.log("Updated: ", configureStore.getState())
})

configureStore.dispatch(addTask("Task 1"));
configureStore.dispatch(addTask("Task 2"));
console.log(configureStore.getState())

configureStore.dispatch(removeTask(1))
// unsubscribe() // If configureStore changes no more notifications

configureStore.dispatch(updateTask(2))
configureStore.dispatch(fetchTodo())

console.log("Updated true:", configureStore.getState());


// configureStore.dispatch(removeTask(2))
// console.log(configureStore.getState())


