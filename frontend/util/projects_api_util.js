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

export const fetchProjects = ( data = {with_search: false} ) => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/projects`,
      data: data,
    }))
}