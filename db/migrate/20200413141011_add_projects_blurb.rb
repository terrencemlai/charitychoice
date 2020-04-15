class AddProjectsBlurb < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :blurb, :string, null: false
  end
end
