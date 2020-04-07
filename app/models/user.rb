# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  is_teacher      :boolean
#  teacher_id      :integer
#  password_digest :string
#  session_token   :string
#  display_name    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    belongs_to :teacher_info,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'Teacher',
    optional: true

end
