class DashboardController < ApplicationController
  before_action :authenticate_user!

  def main; end
end
