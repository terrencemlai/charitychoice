class Project < ApplicationRecord

    # belongs_to :teacher,
    # primary_key: :id,
    # foreign_key: :teacher_id,
    # class_name: 'Teacher'

    # has_one :school,
    # through: :teacher,
    # source: :school

    # has_many :category_associations,
    # primary_key: :id,
    # foreign_key: :project_id,
    # class_name: 'CategoryAssociation'

    # has_many :categories,
    # through: :category_associations,
    # source: :categories

end