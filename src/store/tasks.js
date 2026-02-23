// Action Types
export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"
export const UPDATE_TASK = "UPDATE_TASK"


// Actions
export const addTask = (task) => {
    return { type: ADD_TASK, payload: { task } }
}

export const removeTask = (id) => {
    return { type: REMOVE_TASK, payload: { id } }
}

export const updateTask = (id) => {
    return { type: UPDATE_TASK, payload: { id } }
}

export const fetchTodo = () => {
    console.log('WIN')
    return async function (dispatch, getState) {
        console.log('IN HERE')
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1") // Promise
        const task = await response.json()
        // Perform Asynchronous Tasks Here
        dispatch(addTask(task.title))
    }
}

// Reducer

let id = 0

export default function reducer(state = [], action) {
    switch (action.type) {

        case ADD_TASK:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ]

        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id)

        case UPDATE_TASK:
            return state.map(task =>
                task.id === action.payload.id
                    ? { ...task, completed: !task.completed }
                    : task
            )

        default:
            return state
    }
}