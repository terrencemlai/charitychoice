class AddHonorificToTeachers < ActiveRecord::Migration[5.2]
  def change
    add_column :teachers, :honorific, :string, null: false
  end
end
