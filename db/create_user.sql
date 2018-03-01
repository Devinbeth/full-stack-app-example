insert into users (username, img, auth_id) values ($1, $2, $3)
returning *;
