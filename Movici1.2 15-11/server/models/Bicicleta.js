'use strict'

const mongoose = require('mongoose')

const BiciSchema = new mongoose.Schema ({
    Tipo: {type: String, enum:['Trek marlin 5', 'Trek marlin 6', 'Trek marlin 7']},
    Cantidad: {type: Number, default:0},
    Idsucursal: String,
    Descripcion: String
})

module.exports = mongoose.model('Bicicleta', BiciSchema)