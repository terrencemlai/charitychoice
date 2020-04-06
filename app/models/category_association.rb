class CategoryAssociation < ApplicationController

    belongs_to :projects,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: 'Project',
    required: false

    belongs_to :categories,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: 'Category'
    

end