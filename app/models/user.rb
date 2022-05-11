class User < ApplicationRecord
    has_many :reviews
    has_many :instruments, through: :reviews
end
