class Practice < ApplicationRecord
  has_many :attendances, dependent: :destroy
  has_many :players, through: :attendances, source: :user
end
