# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Donation.destroy_all
CategoryAssociation.destroy_all
Project.destroy_all
Category.destroy_all
User.destroy_all
Teacher.destroy_all
School.destroy_all

ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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
                        display_name: 'Ms. Doe'})

user_02 = User.create({ email: "user_02@gmail.com", 
                        is_teacher: false, 
                        teacher_id: nil, 
                        password_digest: BCrypt::Password.create("password"),
                        session_token: SecureRandom.urlsafe_base64, 
                        display_name: 'Dana Donor'})

user_03 = User.create({ email: "user_03@gmail.com", 
                        is_teacher: false, 
                        teacher_id: nil, 
                        password_digest: BCrypt::Password.create("password"),
                        session_token: SecureRandom.urlsafe_base64, 
                        display_name: 'John Smith'})

cat_01 = Category.create({ category: 'Health & Sports', group: 'subject'})
cat_02 = Category.create({ category: 'History & Civics', group: 'subject'})
cat_03 = Category.create({ category: 'Literacy & Language', group: 'subject'})
cat_04 = Category.create({ category: 'Math & Science', group: 'subject'})
cat_05 = Category.create({ category: 'Music & The Arts', group: 'subject'})
cat_06 = Category.create({ category: 'Special Needs', group: 'subject'})
cat_07 = Category.create({ category: 'Warmth, Care & Hunger', group: 'subject'})
cat_08 = Category.create({ category: 'Art Supplies', group: 'need'})
cat_09 = Category.create({ category: 'Books', group: 'need'})
cat_10 = Category.create({ category: 'Computers & Tablets', group: 'need'})
cat_11 = Category.create({ category: 'Instructional Technology', group: 'need'})
cat_12 = Category.create({ category: 'Reading Nooks, Desks & Storage', group: 'need'})
cat_13 = Category.create({ category: 'Sports & Exercise Equipment', group: 'need'})
cat_14 = Category.create({ category: 'Trips', group: 'need'})

project_01 = Project.create( {  title: 'Curious Kids in the Classroom!',
                                blurb: 'Help me give my students tablets to make learning math fun.',
                                description: ipsum,
                                about_students: ipsum,
                                goal: 500.00,
                                teacher_id: user_01.teacher_id })

project_02 = Project.create( {  title: 'Arts Program Replenishment',
                                blurb: 'Help me give my students new painting and drawing supplies',
                                description: ipsum,
                                about_students: ipsum,
                                goal: 250.00,
                                teacher_id: user_01.teacher_id })

CategoryAssociation.create({ project_id: project_01.id, category_id: cat_04.id })
CategoryAssociation.create({ project_id: project_01.id, category_id: cat_10.id })
CategoryAssociation.create({ project_id: project_01.id, category_id: cat_12.id })
CategoryAssociation.create({ project_id: project_02.id, category_id: cat_05.id })
CategoryAssociation.create({ project_id: project_02.id, category_id: cat_08.id })

Donation.create({   user_id: user_02.id,
                    display_name: 'Anonymous',
                    comment: 'Great cause!',
                    project_id: project_01.id,
                    donation_amount: 75.25 })

Donation.create({   user_id: user_03.id,
                    display_name: 'J. Smith',
                    comment: '',
                    project_id: project_01.id,
                    donation_amount: 50.25 })