class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name
      t.boolean :public
      t.integer :server_id
      t.text :channel_type
      t.integer :member_id

      t.timestamps
    end
    add_index :channels, :server_id
    add_index :channels, :member_id
  end
end
