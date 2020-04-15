# == Schema Information
#
# Table name: projects
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  description    :text             not null
#  about_students :text             not null
#  teacher_id     :integer          not null
#  goal           :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  blurb          :string           not null
#


class Project < ApplicationRecord
    validates :title, :blurb, :description, :about_students, :teacher_id, :goal, presence: true

    belongs_to :teacher,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'Teacher'

    has_one :school,
    through: :teacher,
    source: :school

    has_many :category_associations,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: 'CategoryAssociation'

    has_many :categories,
    through: :category_associations,
    source: :categories

    has_many :donations,
    foreign_key: :project_id,
    class_name: 'Donation'

    def progress
        sum = 0
        self.donations.each do |donation|
            sum += donation.donation_amount
        end
        return sum
    end

    def donors
        self.donations.length
    end

end
