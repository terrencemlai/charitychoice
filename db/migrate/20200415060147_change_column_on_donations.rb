class ChangeColumnOnDonations < ActiveRecord::Migration[5.2]
  def change
    remove_column :donations, :anonynmous
    add_column :donations, :anonymous, :boolean, default: false, null: false

  end
end
