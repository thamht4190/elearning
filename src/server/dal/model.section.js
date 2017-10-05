var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var schema = mongoose.Schema({
    courseId: Number,
    title: String,
    lessonIds: [],
});

schema.plugin(autoIncrement.plugin, 'Section');

module.exports = mongoose.model('Section', schema);