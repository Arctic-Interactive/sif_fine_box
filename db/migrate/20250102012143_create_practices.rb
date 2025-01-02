class CreatePractices < ActiveRecord::Migration[8.0]
  def change
    create_table :practices do |t|
      t.datetime :date, null: false
      t.timestamps
    end
  end
end
