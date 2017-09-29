import { combineReducers } from 'redux';

import CourseList from './reducer.course_list';

const rootReducer = combineReducers({
   courseList: CourseList
});

export default rootReducer;
