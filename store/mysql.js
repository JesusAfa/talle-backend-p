const mysql = require('mysql2/promise');

const config = require('../config');

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    port: config.mysql.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

let pool = mysql.createPool(dbconf);

async function list(table) {
    const [rows] = await pool.query(`SELECT * FROM ${table}`);
    return rows;
}

async function get(table, id) {
    const [rows] = await pool.query(`SELECT * FROM ${table} WHERE id=${id}`);
    return rows[0];
}

async function insert(table, data) {
    const [result] = await pool.query(`INSERT INTO ${table} SET ?`, data);
    return result;
}

async function update(table, data) {
    const [result] = await pool.query(`UPDATE ${table} SET ? WHERE id=?`, [data, data.id]);
    return result;
}

async function upsert(table, data) {
    if (data && data.id) {
        return update(table, data);
    } else {
        return insert(table, data);
    }
}

async function query(table, query, join) {
    let joinQuery = '';
    if (join) {
        const key = Object.keys(join)[0];
        const val = join[key];
        joinQuery = `JOIN ${key} ON ${table}.${val} = ${key}.id`;
    }

    const [rows] = await pool.query(`SELECT * FROM ${table} ${joinQuery} WHERE ${table}.?`, query);
    return rows[0] || null;
}

module.exports = {
    list,
    get,
    upsert,
    query
};
