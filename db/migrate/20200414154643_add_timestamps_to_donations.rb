class AddTimestampsToDonations < ActiveRecord::Migration[5.2]
  def change
    add_column :donations, :created_at, :datetime, null: false
    add_column :donations, :updated_at, :datetime, null: false
  end
end
