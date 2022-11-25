//? Este archivo va a manejar todo lo relacionado a acciones de la base de datos de todo's

const Tasks = require("../models/task.model")

const todoDB = []
//? TODO 
//* {
//*     id: 5,
//*     title: 'Practicar express',
//*     description: 'Ver videos de apoyo y crear otra API',
//*     is_completed: false
//* }

let id = 1

const findAllTodos = async() => {
    //? Esta funcion debe de traer todos los todo's de mi base de datos
    const data = await Tasks.findAll()
    return data
}

const findTodoById = async (id) => {
    //? Esta funcion debe de retornar un todo dependiendo el id
    /* const todo = todoDB.find(item => item.id == id) */
    //el metodo a utilizar es findOne (metodos de secualize) se le pasa un objeto
    //que cumpla la condicion metodos 
    //tambien lo puedo con el metodo findByPK
    const todo = await Tasks.findOne({
        where: {
            id: id
        }
    })
    return todo
}

const updateTodo = async (id, obj)=> {
    const data = await Tasks.update(obj, {
        where: {
            id: id
        }
    })
    return data[0] //retorna un arreglo, pude lucri de estas dos maneras [1], [0]
}

const createTodo = async (obj) => {
    //? Esta funcion debe de crear un nuevo todo en mi base de datos y retornar el todo creado
    const newTodo = await Tasks.create({
        title: obj.title,
        description: obj.description,
   
    }) 
    return newTodo
}

const deleteTodo = async (id) => {
    const data = await Tasks.destroy({
        where: {
            id: id
        }
    })
    return data //terna 1 en caso de eliminar 0 en caso de falso
}

module.exports = {
    findAllTodos,
    findTodoById, 
    createTodo,
    updateTodo,
    deleteTodo
}

