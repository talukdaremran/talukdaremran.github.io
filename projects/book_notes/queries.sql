CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT,
    rating INTEGER,
    review TEXT,
    date_read DATE,
    cover_id TEXT
);