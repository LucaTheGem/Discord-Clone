FactoryBot.define do
  factory :server do
    name { "MyString" }
    description { "MyText" }
    public { false }
    owner_id { 1 }
    owner_name { "MyText" }
  end
end
