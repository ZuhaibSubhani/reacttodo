import * as zod from 'zod'

const createTodo=zod.object({
    title:zod.string().min(1),
    description:zod.string()
})
const updateTodo=zod.object({
    id:zod.string()
})

export {
    createTodo,
    updateTodo
}