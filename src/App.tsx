import { useDispatch, useSelector } from 'react-redux';
import { actions, Todo } from './slices/todos';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';

function App() {
  const todos = useSelector((state: any) => state.todos)
  const dispatch = useDispatch()

  const onDelete = (todo: Todo) => dispatch(actions.delete(todo))

  const onDone = (todo: Todo) => dispatch(actions.done(todo))

  const onCreate = (todo: Todo) => dispatch(actions.create(todo))

  return (
    <div className='container mx-auto max-w-xl flex flex-col gap-6 my-6'>
      <h1 className='text-4xl font-bold tracking-tight'>Too Doo</h1>
      <div className='flex flex-col gap-2'>
        {todos.map((todo: Todo, i: number) => <TodoItem 
          key={i}
          todo={todo}
          onDone={onDone}
          onDelete={onDelete}
        />)}
      </div>
      <TodoForm onSend={onCreate}/>
      <div className='text-sm'>
        <a href="https://github.com/marcusfelix/todo-react-redux-example" target='_blank'>Source code</a> · <a href="https://github.com/marcusfelix" target='_blank'>Crafted by Marcus Felix</a>
      </div>
    </div>
  );
}

export default App;
