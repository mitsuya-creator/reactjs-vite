export default function reducer(state, action) {
    switch (action.type) {
        case "added": {
            return [...state, { id: action.id, name: action.name, done: action.done }]
        }
        case "changed": {
            return state.map(t => {
                if (t.id === action.task.id) {
                    return action.task
                } else {
                    return t;
                }
            })
        }
        case "deleted": {
            return state.filter(t => t.id !== action.id)
        }
        default: {
            throw Error("Action Unknown");
        }
    }
}