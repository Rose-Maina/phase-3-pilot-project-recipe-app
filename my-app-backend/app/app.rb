require 'active_record'

ActiveRecord::Base.establish_connection(
    adapter: "sqlite3",
    database: "db/recipes.sqlite3",
)
sql = <<-SQL
    CREATE TABLE IF NOT EXISTS recipes(
        id INTEGER PRIMARY KEY,
        name TEXT,
        procedure TEXT
    )
    SQL
ActiveRecord::Base.connection.execute(sql) 
