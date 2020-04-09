class AddDefaultToIsTeacherFalse < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :is_teacher, :boolean, default: false
  end
end
