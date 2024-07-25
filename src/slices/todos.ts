import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            title: 'My first todo',
            done: false,
            created: Date.now()
        }
    ],
    reducers: {
        create: (state: Todo[], action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        delete: (state: Todo[], action: PayloadAction<Todo>) => {
            state.splice(state.findIndex((e) => e.title == action.payload.title), 1)
        },
        done: (state: Todo[], action: PayloadAction<Todo>) => {
            const index = state.findIndex((e) => e.title == action.payload.title)
            if(index >= 0){
                state[index] = {...action.payload, ...{ done: !action.payload.done }}
            }
        }
    }
})

export interface Todo {
    title: string;
    done: boolean;
    created: number;
}

export const actions = todoSlice.actions