class AddChannelidToServers < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :channel_id, :integer
    add_index :servers, :channel_id
  end
end
