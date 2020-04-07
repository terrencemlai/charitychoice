# == Schema Information
#
# Table name: categories
#
#  id       :bigint           not null, primary key
#  category :string           not null
#
class Category < ApplicationRecord

    has_many :project_associations,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: 'CategoryAssociation'
    # , optional: true

    has_many :projects,
    through: :project_associations,
    source: :projects
    
end
