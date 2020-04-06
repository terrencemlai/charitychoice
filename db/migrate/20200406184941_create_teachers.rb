class CreateTeachers < ActiveRecord::Migration[5.2]
  def change
    create_table :teachers do |t|
      t.string :full_name, null: false
      t.string :teacher_name, null: false
      t.integer :school_id, null: false
      t.timestamps
    end

    add_index :teachers, :school_id
  end
end
