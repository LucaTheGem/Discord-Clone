class AddUserIdIndexToFriends < ActiveRecord::Migration[5.2]
  def change
    add_index :friends, :user_id
    add_column :users, :tag, :integer, null: false, length: 4
  end
end
