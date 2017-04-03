class Order < ApplicationRecord
  validates :sent, inclusion: { in: [0, 1] }
end
