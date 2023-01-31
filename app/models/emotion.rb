class Emotion < ApplicationRecord
    has_many :logs
    has_many :users, through: :logs
end
