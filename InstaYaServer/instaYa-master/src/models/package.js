const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);

const mailSchema = new mongoose.Schema({
  toDate: {
    type: Date,
    required: true
  },
  package: {
    dimensions: {
      high: {
        type: Number,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      length: {
        type: Number,
        required: true
      }
    },
    weigth: {
      type: Number,
      required: true
    },
    fragile: {
      type: Boolean,
      required: true
    }
  },
  toUser: {
    name: {
      type: String,
      required: true
    },
    dni: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  fromUser: {
    name: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    required: false,
    default: 'Guardado'
  }
})

mailSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Mail', mailSchema)
