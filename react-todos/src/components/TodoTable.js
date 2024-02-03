import TodoRowItem from "./TodoRowItem"

function TodoTable(props) {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th schope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'></th>

                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem
                    key={todo.rowNumber}
                    rowNumber = {todo.rowNumber}
                    rowDescription = {todo.rowDescription}
                    rowAssigned = {todo.rowAssigned}
                    deleteTodo = {props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable