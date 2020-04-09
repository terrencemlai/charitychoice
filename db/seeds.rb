# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Teacher.destroy_all
School.destroy_all

school_01 = School.create({ name: "Townsend Harris High School",
                            city: "Flushing",
                            state: "NY",
                            zip: "11367",
                            latitude: 40.73498,
                            longitude: -73.821274,
                            grade_range: "9-12"})

school_02 = School.create({ name: "Isaac Newton MS for Math and Science",
                            city: "New York",
                            state: "NY",
                            zip: "10029",
                            latitude: 40.794123,
                            longitude: -73.93305,
                            grade_range: "6-8"})

school_03 = School.create({ name: "Grant Street Elementary",
                            city: "Port Townsend",
                            state: "WA",
                            zip: "98368",
                            latitude: 48.112157,
                            longitude: -122.791922,
                            grade_range: "PreK-8"})

teacher_01 = Teacher.create({   full_name: "Jane Doe", 
                                honorific: "Ms.", 
                                teacher_name: "Doe", 
                                school_id: school_01.id})

user_01 = User.create({ email: "user_01@gmail.com", 
                        is_teacher: true, 
                        teacher_id: teacher_01.id, 
                        password_digest: BCrypt::Password.create("password"),
                        session_token: SecureRandom.urlsafe_base64, 
                        display_name: nil})

user_02 = User.create({ email: "user_02@gmail.com", 
                        is_teacher: false, 
                        teacher_id: nil, 
                        password_digest: BCrypt::Password.create("password"),
                        session_token: SecureRandom.urlsafe_base64, 
                        display_name: nil})

user_03 = User.create({ email: "user_03@gmail.com", 
                        is_teacher: false, 
                        teacher_id: nil, 
                        password_digest: nil,
                        session_token: SecureRandom.urlsafe_base64, 
                        display_name: nil})