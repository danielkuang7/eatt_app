class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :comment
      t.string :photo

      t.timestamps
    end
  end
end
