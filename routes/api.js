const express = require('express');
const router = express.Router();
const Restaurante = require('../models/restaurante'); //Modelo



//************************GET********************************/

//GET /Restaurante
router.get('/restaurante', (req, res, next) => {
    //Buscamos documento padre 
    Restaurante.find({}).then((restaurante) => {
        res.status(200).send({ restaurante: restaurante });
    }).catch(next);
});

//GET /Restaurante/dishes
router.get('/restaurante/dishes', (req, res, next) => {
    //Bus
    Restaurante.find({}).then((restaurante) => {
        res.status(200).send({ platos: restaurante[0].dishes });
    }).catch(next);
});

//GET /Restaurante/dish/:_id
router.get('/restaurante/dish/:_id', (req, res, next) => {

    Restaurante.find({}).then((restaurante) => {

        res.status(200).send({ plato: restaurante[0].dishes.id(req.params._id) });
    }).catch(next);

});

//GET /Restaurante/dish/:_id/comments
router.get('/restaurante/dish/:_id/comments', (req, res, next) => {

    Restaurante.find({}).then((restaurante) => {

        res.status(200).send({ comentarios: restaurante[0].dishes.id(req.params._id).comments });
    }).catch(next);

});

//GET /Restaurante/promotions
router.get('/restaurante/promotions', (req, res, next) => {
    //Usamos promesas
    Restaurante.find({}).then((restaurante) => {
        res.status(200).send({ promociones: restaurante[0].promotions });
    }).catch(next);
});

//GET /Restaurante/promotion/:_id
router.get('/restaurante/promotion/:_id', (req, res, next) => {

    Restaurante.find({}).then((restaurante) => {

        res.status(200).send({ promotion: restaurante[0].promotions.id(req.params._id) });
    }).catch(next);

});
//GET /Restaurante/leaders
router.get('/restaurante/leaders', (req, res, next) => {
    //Usamos promesas
    Restaurante.find({}).then((restaurante) => {
        res.status(200).send({ leaders: restaurante[0].leaders });
    }).catch(next);
});

//GET /Restaurante/leader/:_id
router.get('/restaurante/leader/:_id', (req, res, next) => {

    Restaurante.find({}).then((restaurante) => {

        res.status(200).send({ leader: restaurante[0].leaders.id(req.params._id) });
    }).catch(next);

});


//************************POST********************************/

//POST /restaurante
router.post('/restaurante', (req, res, next) => {
    //Creamos documento padre
    Restaurante.create(req.body).then((restaurante) => {
        res.status(200).send({ restaurante: restaurante, creado: true });
    }).catch(next);
});


//POST /Restaurante/dish
router.post('/restaurante/dish', (req, res, next) => {
    //Busco el documento padre
    Restaurante.find({}).then((restaurante) => {
        //Añado un plato al subdocumento platos
        restaurante[0].dishes.push(req.body);
        //Guardo el documento padre
        restaurante[0].save().then(() => {
            res.status(200).send({ creado: true });
        }).catch(next);
    }).catch(next);

});

//POST /restaurante/dish/:_id/comment
router.post('/restaurante/dish/:_id/comment', (req, res, next) => {
    //Busco el documento padre
    Restaurante.find({}).then((restaurante) => {
        //Busco el subdocumento plato y le añado un subdocumento comentario
        restaurante[0].dishes.id(req.params._id).comments.push(req.body);
        //Guardo el documento padre
        restaurante[0].save().then(() => {
            res.status(200).send({ creado: true });
        }).catch(next);
    }).catch(next);

});


//************************UPDATE********************************/

//POST /restaurante/dish/:_idDish/comment/_idComment
router.put('/restaurante/dish/:_idDish/comment/:_idComment', (req, res, next) => {

    //Busco el documento restaurante, dentro de este el subdocuemnto plato y dentro de este el subdocumento comentario
    Restaurante.find({}).then((restaurante) => {
        //asigno los nuevos valores de la propiedades de comentario
        for (propiedad in restaurante[0].dishes.id(req.params._idDish).comments.id(req.params._idComment)) {
            restaurante[0].dishes.id(req.params._idDish).comments.id(req.params._idComment).propiedad = req.body.propiedad;
        };
        //Guardo el documento padre
        restaurante[0].save().then(() => {
            res.status(200).send({ Modificado: true });
        }).catch(next);
    }).catch(next);

});

//************************DELETE********************************/

//DELETE /restaurante/dish/:_idDish/comment/_idComment
router.delete('/restaurante/dish/:_idDish/comment/:_idComment', (req, res, next) => {

    //Busco el documento restaurante, dentro de este el subdocuemnto plato y dentro de este el subdocumento comentario
    Restaurante.find({}).then((restaurante) => {
        //Borro el comentario
        restaurante[0].dishes.id(req.params._idDish).comments.id(req.params._idComment).remove();
        //Guardo el documento padre
        restaurante[0].save().then(() => {
            res.status(200).send({ Borrado: true });
        }).catch(next);
    }).catch(next);

});

module.exports = router;