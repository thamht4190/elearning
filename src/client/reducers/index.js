import { combineReducers } from 'redux';

import CourseList from './admin/reducer.course_list';

const rootReducer = combineReducers({
   adminCourseList: CourseList
});

export default rootReducer;
