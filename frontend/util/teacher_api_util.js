export const getTeachers = data => (
    $.ajax({
        method: 'GET',
        url: 'api/teachers',
        data
    })
)

export const createTeacher = (user, teacher) => (
    $.ajax({
        method: 'POST',
        url: 'api/teachers',
        data: user, teacher
    })
)
