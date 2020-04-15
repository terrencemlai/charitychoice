export const createProject = (project, categories) => (
    $.ajax({
        method: 'POST',
        url: 'api/projects',
        data: project, categories
    })
)

export const fetchProject = id => (
    $.ajax({
      method: 'GET',
      url: `api/projects/${id}`
    })
  );