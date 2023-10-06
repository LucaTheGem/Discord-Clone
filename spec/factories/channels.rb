FactoryBot.define do
  factory :channel do
    name { "MyString" }
    public { false }
    server_id { 1 }
    channel_type { "MyText" }
    member_id { 1 }
  end
end
