class InstrumentWithReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price
  has_many :reviews
end
