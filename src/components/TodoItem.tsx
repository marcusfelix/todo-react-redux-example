import { Todo } from "../slices/todos";
import Circle from "../assets/circle.svg";
import CircleCheck from "../assets/check-circle.svg";
import Trash from "../assets/trash-2.svg";

type Props = {
    todo: Todo;
    onDone: (todo: Todo) => void;
    onDelete: (todo: Todo) => void;
}

export default function TodoItem(props: Props) {

    return <div className={`flex flex-row gap-4 ${props.todo.done ? 'opacity-30' : 'opacity-100'}`}>
        <button 
            className="font-mono" 
            onClick={() => props.onDone(props.todo)}
        >
            {props.todo.done ? <img src={CircleCheck}/> : <img src={Circle}/>}
        </button> 
        <div className="flex-1 text-xl">{props.todo.title}</div> 
        <button 
            onClick={() => props.onDelete(props.todo)}
        >
            <img src={Trash}/>
        </button>
    </div>
}