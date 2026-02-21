import * as actionTypes from "./configureStore/tasks/actionTypes"

let id = 0

function reducer (state=[], action) {
    switch(action.type) {
        case actionTypes.addTask:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ]
        
            case actionTypes.removeTask:
            return state.filter(task => task.id !== action.payload.id)
        
        case actionTypes.updateTask:
            return state.map(task =>
                task.id === action.payload.id
                    ? { ...task, completed: true }
                    : task
            )
        default: 
            return state
    }
}

export default reducer