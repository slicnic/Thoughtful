class User < ApplicationRecord
    has_many :logs
    has_many :emotions, through: :logs

    has_secure_password
    validates :name, presence: true, uniqueness: true
end
