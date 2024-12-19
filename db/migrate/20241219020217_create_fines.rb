class CreateFines < ActiveRecord::Migration[8.0]
  def change
    create_table :fines do |t|
      t.decimal :amount
      t.text :description
      t.references :user, null: false, foreign_key: true
      t.integer :fine_type

      t.timestamps
    end
  end
end
