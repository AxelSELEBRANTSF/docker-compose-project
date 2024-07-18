-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role SMALLINT NOT NULL CHECK (role IN (0, 1, 2, 3)),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data only if table exists
--INSERT INTO users (username, email, password, role, created_at, updated_at)
--SELECT 'john_doe', 'john.doe@example.com', 'hashed_password_here', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
--WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'john_doe');

--INSERT INTO users (username, email, password, role, created_at, updated_at)
--SELECT 'jane_smith', 'jane.smith@example.com', 'hashed_password_here', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
--WHERE NOT EXISTS (SELECT 1 FROM users WHERE username = 'jane_smith');
