# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


require 'faker'
puts "Destroying"
Log.destroy_all
Emotion.destroy_all
User.destroy_all

puts "Seeding!"

puts "Creating Users"
User.create(name:"admin13", password:"123")

6.times do
    User.create(name: Faker::Name.name, password_digest: "password")
end

puts "Creating Logs"
6.times do
    Log.create(content: Faker::Coffee.notes)
end

puts "Creating Emotions"

60.times do
    Emotion.create(emotion: Faker::Emotion.adjective)
    # Faker::Emotion.noun  Faker::MichaelScott.quote
end
puts "and more"
60.times do
    Emotion.create(emotion: Faker::Emotion.noun)
end

puts "Done Seeding!"