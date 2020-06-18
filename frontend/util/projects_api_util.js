export const createProject = (project, categories) => (
    $.ajax({
        method: 'POST',
        url: 'api/projects',
        data: project, categories
    })
)

export const updateProject = (project, categories) => (
    $.ajax({
        method: 'PATCH',
        url: `api/projects/${project.id}`,
        data: project, categories
    })
)


export const fetchProject = id => (
    $.ajax({
      method: 'GET',
      url: `api/projects/${id}`
    })
  );

export const fetchProjects = (data) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/projects`,
      data: data,
    }))
}