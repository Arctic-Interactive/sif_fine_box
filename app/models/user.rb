class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates_presence_of :name
  validates_presence_of :email
  validates_presence_of :role

  enum :role, { unregistered: 0, player: 1, coach: 2, administrator: 3 }

  has_many :fines, dependent: :destroy
  has_many :attendances
  has_many :practices, through: :attendances
end
