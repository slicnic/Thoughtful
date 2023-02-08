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
# User.create(name:"admin", password:"123")
User.create(name:"nic", password:"nic")


6.times do
    User.create(name: Faker::Name.name, password: "password")
end



puts "Creating Emotions"

6.times do
    Emotion.create(emotion: Faker::Emotion.adjective)
    # Faker::Emotion.noun  Faker::MichaelScott.quote
end
puts "and more"
6.times do
    Emotion.create(emotion: Faker::Emotion.noun)
end

puts "Creating Logs"
15.times do
    Log.create(content: Faker::GreekPhilosophers.quote, user_id: User.all.sample.id, emotion_id: Emotion.all.sample.id)
end
5.times do 
    Log.create(content: Faker::Lorem.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 6), user_id: User.all.sample.id, emotion_id: Emotion.all.sample.id)
end
puts "Done Seeding!"