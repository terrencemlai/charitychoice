class CreateDonations < ActiveRecord::Migration[5.2]
  def change
    create_table :donations do |t|
      t.integer :user_id, null: false
      t.string :display_name, null: false
      t.boolean :anonynmous, null: false, default: false
      t.string :comment
      t.integer :project_id, null: false
      t.float :donation_amount, null: false
    end

    add_index :donations, :user_id
    add_index :donations, :project_id
  end
end
