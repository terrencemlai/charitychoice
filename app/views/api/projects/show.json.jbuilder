json.project do 
    json.extract!       @project, :id, :title, :blurb, :description, :about_students, :teacher_id, :goal, :created_at
    json.school_id      @project.school.id
    json.progress       @project.progress
    json.progressPct    @project.goal >= @project.progress ? ((@project.progress/@project.goal) * 100).floor : 100
    json.needed         @project.goal >= @project.progress ? @project.goal-@project.progress : 0 
    json.donors         @project.donors
    json.donationIds    @project.donations.order('created_at DESC').pluck(:id)
    json.categoryIds    @project.categories.pluck(:id)
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

json.donations @project.donations.order('id DESC')

json.categories @project.categories
