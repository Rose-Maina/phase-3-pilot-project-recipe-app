require 'active_record'
require 'pry'

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

insert_meal_recipe = <<-SQL
    INSERT INTO recipes(name, procedure) VALUES ("Ugali", "flour");
    SQL

ActiveRecord::Base.connection.execute(insert_meal_recipe)

class Recipe < ActiveRecord::Base
end
binding.pry