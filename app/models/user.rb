class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates_presence_of :name
  validates_presence_of :email
  validates_presence_of :role

  enum :role, { unregistered: 0, player: 1, coach: 2, administrator: 3 }

  has_one_attached :avatar

  validates :avatar, content_type: [ "image/png", "image/jpeg" ],
                    size: { less_than: 2.megabytes, message: "should be less than 2MB" }

  has_many :fines, dependent: :destroy
  has_many :attendances
  has_many :practices, through: :attendances

  def total_contribution
    fines.where(paid: true).sum(:amount)
  end

  def pending_balance
    balance - fines.where(paid: false).sum(:amount)
  end

  def display_unpaid_fines
    "#{fines.where(paid: false).count} ikke betalt" if fines.where(paid: false).count
  end
end
