var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var schema = mongoose.Schema({
    title: String,
    sectionIds: [],
    isPublished: Boolean
});

schema.plugin(autoIncrement.plugin, 'Course');

module.exports = mongoose.model('Course', schema);