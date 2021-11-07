import { createConnection } from 'typeorm';

createConnection();

// async function dbConnection() {
//   const connection = await createConnection({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'postgres',
//     password: 'docker',
//     database: 'fmbase',
//   });

//   await connection.connect();
// }

// export default dbConnection();
