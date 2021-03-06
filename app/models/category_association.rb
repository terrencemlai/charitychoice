# == Schema Information
#
# Table name: category_associations
#
#  id          :bigint           not null, primary key
#  project_id  :integer          not null
#  category_id :integer          not null
#
class CategoryAssociation < ApplicationRecord

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
