class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :practice

  validates :user_id, uniqueness: { scope: :practice_id, message: "already has an attendance record for this practice" }
end
