# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  is_teacher      :boolean          default(FALSE)
#  teacher_id      :integer
#  password_digest :string
#  session_token   :string
#  display_name    :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :display_name, presence: true

    after_initialize :ensure_session_token
    
    attr_reader :password

    belongs_to :teacher_info,
    primary_key: :id,
    foreign_key: :teacher_id,
    class_name: 'Teacher',
    optional: true

    def self.find_by_email(email)
        user = User.find_by(username: email)
        return user
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end    
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end
    
    private
    
    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end
    
    def new_session_token
        SecureRandom.urlsafe_base64
    end
    
    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
          self.session_token = new_session_token
        end
        self.session_token
    end

end
