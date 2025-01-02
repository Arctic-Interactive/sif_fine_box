class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates_presence_of :name
  validates_presence_of :email
  validates_presence_of :role

  enum :role, { player: 0, coach: 1, administrator: 2 }

  has_many :fines, dependent: :destroy
  has_many :attendances
  has_many :practices, through: :attendances
end
