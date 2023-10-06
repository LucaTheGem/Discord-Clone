class AddFriendDataToFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :username, :string
    add_column :friends, :email, :string
  end
end
