import axios from 'axios';

export const NEW_COURSE = 'new_course';

export function createCourse(values, callback) {
    return function(dispatch) {
        axios.post('/admin/course/create', values)
        .then(res => {
            if (res.status == 200 && res.data) {
                dispatch({
                    type: NEW_COURSE,
                    payload: res.data
                })
            }
        })
    }
}