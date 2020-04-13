export const createProject = (project, categories) => (
    $.ajax({
        method: 'POST',
        url: 'api/projects',
        data: project, categories
    })
)

