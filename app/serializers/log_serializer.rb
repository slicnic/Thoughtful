class LogSerializer < ActiveModel::Serializer
  attributes :id, :content
  has_one :user
  has_one :emotion
end
