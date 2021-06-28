
'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var pomodoroSchema = Schema( {
  goal:String,
  result:String,
  completedAt: String,
  startedAt: String,
  userId: ObjectId
} );

module.exports = mongoose.model( 'PomodoroANSWER', pomodoroSchema );
