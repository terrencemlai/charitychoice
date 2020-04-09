class AddDefaultToIsTeacher < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :is_teacher, :boolean, default: true
  end
end
