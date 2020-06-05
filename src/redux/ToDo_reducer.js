
export const ToDo_Reducer = (state, action) => {
    debugger
    switch (action.type) {
        case "ADD":
           return [...state, {id: state.length+1, title: action.payload, completed: false}]
        case "ON_ENTER_ADD":
            return [...state, {id: state.length+1, title: action.payload, completed: false}]
        case "REMOVE_ONE":
            return state.filter(t=> t.id !== action.payload)
        case "COMPLETED":
            debugger
            return state.map(t=> {
                    if
                    (t.id == action.payload)
                    {t.completed = !t.completed}
                return t}
                )
        default:
            return state
    }}
