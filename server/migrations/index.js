import pool from "../config/db";

pool.on("connect", () => {
  console.log("Connected");
});

const drop = () => {
  const usersTable = "DROP TABLE IF EXISTS users CASCADE";
  const padi_lite = "DROP TABLE IF EXISTS padi_lite CASCADE";
  const padi_start = "DROP TABLE IF EXISTS padi_start CASCADE";
  const padi_connect = "DROP TABLE IF EXISTS padi_connect CASCADE";
  const padi_premium = "DROP TABLE IF EXISTS padi_premium CASCADE";
  const dropTables = `${usersTable};${padi_lite};${padi_start};${padi_connect};${padi_premium};`;

  pool.query(`${dropTables}`, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Tables dropped");
    }
    pool.end();
  });
};

const create = () => {
  const usersTable = `CREATE TABLE IF NOT EXISTS
  users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    address VARCHAR(1600),
    is_admin BOOLEAN DEFAULT FALSE
  )`;

  //padi_lite table
  const padi_lite = `CREATE TABLE IF NOT EXISTS
  padi_lite(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    type VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL
  )`;

  //padi_start table
  const padi_start = `CREATE TABLE IF NOT EXISTS
  padi_start(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL,
    type VARCHAR(1600) NOT NULL
  )`;

  //padi_connect table
  const padi_connect = `CREATE TABLE IF NOT EXISTS
  padi_connect(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL,
    type VARCHAR(1600) NOT NULL
  )`;

  //padi_premium table
  const padi_premium = `CREATE TABLE IF NOT EXISTS
  padi_premium(
    id SERIAL PRIMARY KEY,    
    name VARCHAR(1600) NOT NULL,
    duration VARCHAR(225) NOT NULL,
    type VARCHAR(1600) NOT NULL
  )`;

  const migrationQueries = `${usersTable};${padi_lite};${padi_start};${padi_connect};${padi_premium};`;
  pool.query(`${migrationQueries}`, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database migration successfully executed!");
    }
    pool.end();
  });
};

const addItem = () => {
  //padi_lite table
  pool.query(
    "INSERT INTO padi_lite (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Standard-Ward Accommodation",
        "Minor-Intermediate - Major Surgery",
        "Optical Care",
        "Dental Care",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      ["all", "all", "all", "all", "all", "all", "1", "1", "1", "1", "1"]
    ]
  );

  //padi_start table
  pool.query(
    "INSERT INTO padi_start (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Semi-Private Ward Accommodation",
        "Ante-natal & Maternity care",
        "Paediatric Care",
        "Optical Care",
        "Ophthalmologic Surgical Procedures",
        "Dental Care",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      [
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "2",
        "2",
        "2",
        "2",
        "2"
      ]
    ]
  );

  //padi_connect table
  pool.query(
    "INSERT INTO padi_connect (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Semi-Private Ward Accommodation",
        "Ante-natal & Maternity care",
        "Minor-Intermediate - Major Surgery",
        "Paediatric Care",
        "Optical Care",
        "Ophthalmologic Surgical Procedures",
        "Dental Care",
        "Cancer",
        "Burial Insurance",
        "Major Surgery",
        "Rehabilitative Care",
        "Maternity",
        "Appendicitis Care",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      [
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "3",
        "3",
        "3",
        "3",
        "3"
      ]
    ]
  );

  //padi_premium table

  pool.query(
    "INSERT INTO padi_premium (name, type, duration) SELECT * FROM UNNEST ($1::text[], $2::text[],  $3::text[])",
    [
      [
        "In-patient and Out-patient care",
        "Semi-Private Ward Accommodation",
        "Ante-natal & Maternity care",
        "Minor-Intermediate - Major Surgery",
        "Paediatric Care",
        "Optical Care",
        "Ophthalmologic Surgical Procedures",
        "Dental Care",
        "Cancer",
        "Burial Insurance",
        "Major Surgery",
        "Rehabilitative Care",
        "Maternity",
        "Appendicitis Care",
        "International Care",
        "Intermediate-Major Surgery",
        "Physiotherapy",
        "Prescriptions",
        "Personal Accident Insurance",
        "Okada & Keke Insurance Cover ",
        "Personal Accident for Third Party ",
        "Property & Asset Cover",
        "Fire Insurance Protection"
      ],
      [
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "hmo",
        "insurance",
        "insurance",
        "insurance",
        "insurance",
        "insurance"
      ],
      [
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "all",
        "4",
        "4",
        "4",
        "4",
        "4"
      ]
    ]
  );
};

export { drop, create, addItem };

// eslint-disable-next-line eol-last
require("make-runnable/custom")({
  printOutputFrame: false
});
