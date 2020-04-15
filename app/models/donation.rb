# == Schema Information
#
# Table name: donations
#
#  id              :bigint           not null, primary key
#  user_id         :integer          not null
#  display_name    :string           not null
#  anonynmous      :boolean          default(FALSE), not null
#  comment         :string
#  project_id      :integer          not null
#  donation_amount :float            not null
#
class Donation < ApplicationRecord

    belongs_to :donor,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'
    
    belongs_to :project,
    foreign_key: :project_id,
    class_name: 'Project'

end
