
export function isAdmin(roles) {
    return roles["isAdmin"] === true;
}

export function isStudent(roles) {
    return roles["isStudent"] === true;
}

export function isTeacher(roles) {
    return roles["isTeacher"] === true;
}

export function isCourseStudent(courseId, userCourses) {
    return userCourses?.some(val => val.id === courseId);
}

export function isCourseTeacher(userEmail, courseTeachers) {
    return courseTeachers?.some(val => val.email === userEmail);
}

export function isCourseMainTeacher(userEmail, courseTeachers) {
    return courseTeachers?.some(val => val.email === userEmail && val.isMain);
}