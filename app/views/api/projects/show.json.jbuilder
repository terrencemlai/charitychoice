json.project do 
    json.extract! @project, :id, :title, :blurb, :description, :about_students, :teacher_id, :goal, :created_at
    json.progress @project.progress
    json.donors @project.donors
    json.donationIds @project.donations.pluck(:id)
    json.categoryIds @project.categories.pluck(:id)
end

json.teacher do
    json.id @project.teacher.id
    json.school_id @project.teacher.school_id
    json.display_name @project.teacher.honorific+' '+@project.teacher.teacher_name
end

json.school do
    json.extract! @project.school, :id, :name, :city, :state, :zip, :latitude, :longitude, :grade_range
    json.teacherIds @project.school.teachers.pluck(:id)
end

json.donations @project.donations

json.categories @project.categories
