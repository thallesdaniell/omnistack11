const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStak 11',
        aluno: 'Thalles'
    });
});








app.listen(3333);