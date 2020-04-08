export const getSchools = () => (
    $.ajax({
        method: 'GET',
        url: 'api/schools'
    })
)