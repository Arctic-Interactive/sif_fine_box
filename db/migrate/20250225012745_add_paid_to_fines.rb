class AddPaidToFines < ActiveRecord::Migration[8.0]
  def change
    add_column :fines, :paid, :boolean
  end
end
