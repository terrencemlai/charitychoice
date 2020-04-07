# == Schema Information
#
# Table name: teachers
#
#  id           :bigint           not null, primary key
#  full_name    :string           not null
#  teacher_name :string           not null
#  school_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Teacher < ApplicationRecord
    validates :full_name, presence: true
    validates :teacher_name, presence: true
    validates :school_id, presence: true

    belongs_to :school,
    primary_key: :id,
    foreign_key: :school_id,
    class_name: 'School'

    has_many :projects,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'Project'

    has_one :user_info,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'User'

end
