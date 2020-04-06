class CreateCategoryAssociations < ActiveRecord::Migration[5.2]
  def change
    create_table :category_associations do |t|
      t.integer :project_id, null: false
      t.integer :category_id, null: false
    end

    add_index :category_associations, :project_id
    add_index :category_associations, :category_id
  end
end
