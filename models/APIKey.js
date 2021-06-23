'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var apikeySchema = Schema( {
  userId: ObjectId,
  apikey: String,
  domainName: String,
} );

module.exports = mongoose.model( 'APIKey', apikeySchema );
