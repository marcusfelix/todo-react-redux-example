import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { Todo } from "../slices/todos";

type Props = {
    onSend: (todo: Todo) => void;
}

export default function TodoForm(props: Props){
    const defaultTodo = {
        title: '',
        done: false,
        created: Date.now()
    }
    const [todo, setTodo] = useState<Todo>(defaultTodo)

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setTodo({ ...todo, title: e.target.value })
    }

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        props.onSend({ ...todo, created: Date.now() })
        setTodo(defaultTodo)
    }

    return <form className='flex flex-row gap-2'>
        <input 
            className='flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-md'
            type='text' 
            value={todo.title}
            onChange={onChange}
        />
        <button 
            className='bg-black text-white px-4 py-2 rounded-md'
            type='button' 
            onClick={onClick}
        >Send</button>
    </form>
}