class Product < ApplicationRecord
  validates :price, presence: true, numericality: { min: 0.01 }
  validates :name, presence: true
end
