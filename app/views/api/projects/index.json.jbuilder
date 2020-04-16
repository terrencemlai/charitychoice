

json.projects do 
    @projects.each do |project|
        json.set! project.id do
            json.extract! project, :id, :title, :blurb, :description, :about_students, :teacher_id, :goal, :created_at
            json.school_id project.school.id
            json.progress project.progress
            json.donors project.donors
            json.donationIds project.donations.pluck(:id)
            json.categoryIds project.categories.pluck(:id)
        end
    end
end


json.teachers do
    @projects.each do |project|
        json.set! project.teacher.id do
            json.id project.teacher.id
            json.school_id project.teacher.school_id
            json.display_name project.teacher.honorific+' '+project.teacher.teacher_name
        end
    end
end

json.schools do 
    @projects.each do |project|
        json.set! project.school.id do
            json.extract! project.school, :id, :name, :city, :state, :zip, :latitude, :longitude, :grade_range
            json.teacherIds project.school.teachers.pluck(:id)
        end
    end
end

json.query do
    json.query @query
end

# json.categories do
#     @projects.each do |project|
#         project.categories.each do |category|
#             json.set! category.id do
#                 json.extract! category, :id, :category, :group
#             end
#         end
#     end
# end

# json.donations do
#     @projects.each do |project|
#         project.donations.each do |donation|
#             json.set! donation.id do
#                 json.extract! donation, :id, :user_id, :display_name, :comment, :project_id, :donation_amount, :anonymous, :created_at, :updated_at
#             end
#         end
#     end
# end
