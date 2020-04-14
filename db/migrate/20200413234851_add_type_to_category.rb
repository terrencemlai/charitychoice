class AddTypeToCategory < ActiveRecord::Migration[5.2]
  def change
    add_column :categories, :group, :string, null: false
  end
end
