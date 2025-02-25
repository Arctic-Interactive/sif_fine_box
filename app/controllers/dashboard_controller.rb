class DashboardController < ApplicationController
  before_action :authenticate_user!

  def main
    @players_by_fines = User.left_joins(:fines)
    .group(:id)
    .having("SUM(fines.amount) > 0")
    .order(Arel.sql("SUM(fines.amount) DESC"))
  end
end
