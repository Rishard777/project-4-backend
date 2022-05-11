class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_one :user
  has_one :instrument
end
