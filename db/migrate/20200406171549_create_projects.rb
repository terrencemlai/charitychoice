class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :about_students, null: false
      t.integer :teacher_id, null: false
      t.float :goal, null: false
      t.timestamps
    end

    add_index :projects, :teacher_id
  end
end
