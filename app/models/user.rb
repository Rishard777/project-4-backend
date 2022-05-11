class User < ApplicationRecord
    has_secure_password
    
    has_many :reviews
    has_many :instruments, through: :reviews

    validates :name, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com|flatironschool.com/)
            errors.add(:permitted_emails, "That email is  not allowed")
        end
    end 
end
