export const getfriends = user_id => (
    $.ajax({
        method:'GET',
        url:'/api/friends',
        data: { user_id }
    })
);

export const addfriend = friend => (
    $.ajax({
        method:'POST',
        url:'/api/friends',
        data: { friend }
    })
);

export const deletefriend = friend_id => (
    $.ajax({
        method:'DELETE',
        url:'/api/friends/'
    })
);