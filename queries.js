const Pool = require('pg').Pool

const pool = new Pool({
  user: 'naeluxwoiobgot',
  host: 'ec2-52-206-182-219.compute-1.amazonaws.com',
  database: 'dmoifr8qhdceh',
  password: 'cfcfa780363463783e38ef4b631a35c90896835f32b24862fb79a28031e3662c',
  port: 5432,
  ssl: {
      rejectUnauthorized: false
  }
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const { name, age, email, occupation } = request.body
  let id_phone = 2
  console.log(request.body)
  pool.query('INSERT INTO users (name, age, email, occupation, id_phone) VALUES ($1, $2, $3, $4, $5)', [name, age, email, occupation, id_phone] , (error, results) => {
    if (error) {
      throw error
    }
    //response.status(201).send(`User added with ID: ${results.insertId}`)
    response.redirect('/')
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}