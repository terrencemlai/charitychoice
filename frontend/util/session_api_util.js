export const signin = user => (
    $.ajax({
      method: 'POST',
      url: '/api/sessions',
      data: { user }
    })
  );
  
  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/sessions'
    })
  );
  