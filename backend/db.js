const sql = require("mssql");

const config = {
    user: "marcox-db",
    password: "database1@",
    server: "marcox-sql-2026.database.windows.net",
    database: "marcox-db",
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
};

async function query(queryText) {
    let pool = await sql.connect(config);
    return pool.request().query(queryText);
}

module.exports = { query };