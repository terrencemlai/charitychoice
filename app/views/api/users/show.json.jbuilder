json.user do
    json.extract! @user, :id, :is_teacher, :teacher_id, :display_name
end