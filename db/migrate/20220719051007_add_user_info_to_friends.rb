class AddUserInfoToFriends < ActiveRecord::Migration[5.2]
  def change
    add_column :friends, :user_info, :string
  end
end
