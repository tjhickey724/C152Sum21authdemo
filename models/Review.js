'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var reviewSchema = Schema( {
  userId: ObjectId,
  review: String,
  completedAt: Date,
  course: String,
} );

module.exports = mongoose.model( 'Review', reviewSchema );
