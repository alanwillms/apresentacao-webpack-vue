class OrderItem < ApplicationRecord
  belongs_to :order
  belongs_to :product

  validates :order, presence: true
  validates :product, presence: true
  validates :amount, presence: true, numericality: { integer_only: true, min: 1 }
  validates :unit_value, presence: true, numericality: true
  validates :total_value, presence: true, numericality: true

  before_validation :set_unit_value
  before_validation :set_total_value

  private

  def set_unit_value
    self.unit_value = product&.price
  end

  def set_total_value
    self.total_value = (product&.price || 0) * (amount || 0)
  end
end
