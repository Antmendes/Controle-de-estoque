const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://localhost:8080/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;


// configuraçao que substitui a necessidade de configurar o cors n spring
// permitindo a conexao com a api