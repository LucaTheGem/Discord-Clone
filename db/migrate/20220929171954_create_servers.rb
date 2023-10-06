class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name
      t.text :description
      t.boolean :public
      t.integer :owner_id
      t.text :owner_name

      t.timestamps
    end
    add_index :servers, :name
    add_index :servers, :owner_id
    add_index :servers, :owner_name
  end
end
