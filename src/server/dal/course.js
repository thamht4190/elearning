var ModelCourse = require('./model.course');

class DalCourse {
    getAll() {
        return ModelCourse.find({}).exec();
    }
}

module.exports = DalCourse;