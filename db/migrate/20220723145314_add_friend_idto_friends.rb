class AddFriendIdtoFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :friend_id, :integer, null: false
    remove_column :friends, :user_id, :integer
    add_column :friends, :user_id, :integer, null: false

    add_index :friends, :friend_id
  end
end
