class Server < ApplicationRecord
    belongs_to :user,
        foreign_key: :owner_id,
        class_name: :User

    has_many :channels,
        foreign_key: :channel_id,
        class_name: :Channel

    validates :name, :public, :owner_id, :owner_name, presence: true
end
