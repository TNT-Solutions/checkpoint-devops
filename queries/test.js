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

  getUsers()