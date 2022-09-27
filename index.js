console.log('Inicio');

const DBest = require('./getEstudiantes');

var express = require('express');
var bodyP = require('body-parser')
var cors = require('cors');

var app = express();
var router = express.Router();

app.use(bodyP.urlencoded({extended: true }));
app.use(bodyP.json());
app.use(cors());
app.use('API', router);

router.route('/getEstudiantes').get((request, response) =>{
    DBest.getEstudiantes().then(result => {
        response.json(result[0]);
    });
});

var portcnx = process.env.PORT || 5000;
app.listen(portcnx);
console.log('end')