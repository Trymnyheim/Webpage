

SELECT EXISTS (
    SELECT *
    FROM Users
    WHERE Username = ? AND PasswordHash = ?
) AS userExists;

INSERT INTO Users(Username, Email, PasswordHash)
    VALUES (?, ?, ?);

DELETE FROM Users
    WHERE UserId = ?;