json.array! @friends do |friend|
    json.name friend.username
    json.email friend.email
end
