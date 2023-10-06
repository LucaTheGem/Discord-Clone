export const getserver = server_id => {
    $.ajax({
        method: 'GET',
        url: `/api/servers/${server_id}`,
        data: { server }
    })
};

export const createserver = server => {
    $.ajax({
        method: 'POST',
        url: `/api/servers`,
        data: { server }
    })
};

export const deleteserver = server_id => {
    $.ajax({
        method: 'DELETE',
        url: `/api/servers/${server_id}`
    })
};

export const editserver = server => {
    $.ajax({
        method: 'PATCH',
        url: `/api/servers/${server.id}`,   
        data: { server }
    })
};