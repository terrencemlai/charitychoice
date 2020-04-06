class CreateSchools < ActiveRecord::Migration[5.2]
  def change
    create_table :schools do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :grade_range, null: false
      t.timestamps
    end
  end
end
