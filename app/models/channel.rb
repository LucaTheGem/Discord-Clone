class Channel < ApplicationRecord
    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server

    has_many :members,
        foreign_key: :member_id,
        class_name: :User

    validates :name, :public, :server_id, :member_id, presence: true
end
