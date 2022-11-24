const {Sequelize} = require('sequelize')



//constructor                                                                                                                                                             
const db = new Sequelize({
  //con que db nos vamos a conectar
  dialect : 'postgres',
  host: 'localhost',
  database: 'todo-db',
  username: 'postgres',
  password: 'root',
  port: 5432
})

db.authenticate()
      .then(()=> console.log('Database Autenticada correctamente'))
      .catch((err)=> {console.log(err)})

db.sync()
    .then(()=> console.log('database autenticada correctamente'))
    .catch((err)=> {console.log(err)})