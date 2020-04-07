# == Schema Information
#
# Table name: schools
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  city        :string           not null
#  state       :string           not null
#  zip         :string           not null
#  latitude    :float            not null
#  longitude   :float            not null
#  grade_range :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class School < ApplicationRecord

    has_many :teachers,
    primary_key: :id,
    foreign_key: :school_id,
    class_name: 'Teacher'

    has_many :projects,
    through: :teachers,
    source: :projects

end
