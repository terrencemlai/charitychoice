class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.boolean :is_teacher
      t.integer :teacher_id
      t.string :password_digest
      t.string :session_token
      t.string :display_name
      t.timestamps
    end
  end
end
