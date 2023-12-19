const axios = require('axios');

function createRemoteDB(host, port) {
    const URL = 'http://'+ host + ':' + port;

    function list(table) {
        return axios.get(`${URL}/${table}`);
    }

    function get(table, id) {
        return axios.get(`${URL}/${table}/${id}`);
    }

    function insert(table, data) {
        return axios.post(`${URL}/${table}`, data);
    }

    function update(table, data) {
        return axios.put(`${URL}/${table}`, data);
    }

    function upsert(table, data) {
        if (data.id) {
            return axios.put(`${URL}/${table}`, data);
        }

        return axios.post(`${URL}/${table}`, data);
    }

    function query(table, query, join) {
        return axios.post(`${URL}/${table}/query`, { query, join });
    }

    return {
        list,
    }
}

module.exports = createRemoteDB;