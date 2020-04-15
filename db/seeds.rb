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

schools = [ { name: 'Dodgeland Elementary', city: 'Juneau', state: 'WI', zip: '53039', latitude: 43.402883, longitude: -88.715989, grade_range: 'PreK-5' },
            { name: 'Blue Ridge Elementary School', city: 'Evans', state: 'GA', zip: '30809', latitude: 33.537778, longitude: -82.106068, grade_range: 'PreK-5' },
            { name: 'Montague Community Day', city: 'Montague', state: 'CA', zip: '96064', latitude: 41.728002, longitude: -122.521663, grade_range: '1-6' },
            { name: 'Mcrae Elementary School', city: 'Searcy', state: 'AR', zip: '72143', latitude: 35.254112, longitude: -91.743151, grade_range: 'K-4' },
            { name: 'Beech Bottom Primary', city: 'Beech Bottom', state: 'WV', zip: '26030', latitude: 40.225829, longitude: -80.650912, grade_range: 'PreK-4' },
            { name: 'Mckay Campus-Fsc', city: 'Fitchburg', state: 'MA', zip: '1420', latitude: 42.595008, longitude: -71.789856, grade_range: 'PreK-4' },
            { name: 'Hal Hutchens Elementary', city: 'Douglasville', state: 'GA', zip: '30134', latitude: 33.802652, longitude: -84.769458, grade_range: 'PreK-5' },
            { name: 'Pine Castle Elementary', city: 'Orlando', state: 'FL', zip: '32809', latitude: 28.473692, longitude: -81.367149, grade_range: 'PreK-5' },
            { name: 'Concord Intermediate School', city: 'Elkhart', state: 'IN', zip: '46517', latitude: 41.636793, longitude: -85.924727, grade_range: '4-6' },
            { name: 'Montessori At Franklin', city: 'Rochester', state: 'MN', zip: '55904', latitude: 43.993187, longitude: -92.455508, grade_range: 'K-5' },
            { name: 'Isaac Middle School', city: 'Phoenix', state: 'AZ', zip: '85009', latitude: 33.466685, longitude: -112.133479, grade_range: '6-8' },
            { name: 'Thomas A. Edison Elementary. School', city: 'Westland', state: 'MI', zip: '48185', latitude: 42.331219, longitude: -83.380919, grade_range: 'K-4' },
            { name: 'Central High School', city: 'Champaign', state: 'IL', zip: '61820', latitude: 40.116662, longitude: -88.252835, grade_range: '9-12' },
            { name: 'Elkhart Elementary', city: 'Elkhart', state: 'KS', zip: '67950', latitude: 37.004037, longitude: -101.897473, grade_range: 'PreK-4' },
            { name: 'Ps 1 Tottenville', city: 'Staten Island', state: 'NY', zip: '10307', latitude: 40.508817, longitude: -74.243994, grade_range: 'PreK-5' },
            { name: 'Royal Oaks Elementary', city: 'Visalia', state: 'CA', zip: '93277', latitude: 36.318497, longitude: -119.321824, grade_range: 'K-6' },
            { name: 'Richwood Middle School', city: 'Richwood', state: 'WV', zip: '26261', latitude: 38.224009, longitude: -80.528335, grade_range: '6-8' },
            { name: 'Symmes Valley Elementary School', city: 'Willow Wood', state: 'OH', zip: '45696', latitude: 38.608012, longitude: -82.483459, grade_range: 'PreK-8' },
            { name: 'Ps 376', city: 'Brooklyn', state: 'NY', zip: '11237', latitude: 40.698024, longitude: -73.920455, grade_range: 'K-5' },
            { name: 'Byron Area High School', city: 'Byron', state: 'MI', zip: '48418', latitude: 42.826256, longitude: -83.949923, grade_range: '9-12' },
            { name: 'North Elementary School', city: 'Leon', state: 'IA', zip: '50144', latitude: 40.748496, longitude: -93.74077, grade_range: '3-5' },
            { name: 'Brenham Alternative', city: 'Brenham', state: 'TX', zip: '77833', latitude: 30.158848, longitude: -96.39316, grade_range: '12-12' },
            { name: 'Bowie', city: 'Chicopee', state: 'MA', zip: '1022', latitude: 42.197871, longitude: -72.561331, grade_range: 'K-5' },
            { name: 'Highland Park El', city: 'Texarkana', state: 'TX', zip: '75503', latitude: 33.44035, longitude: -94.046767, grade_range: 'PreK-5' },
            { name: 'Orangeville Elementary School', city: 'Orangeville', state: 'IL', zip: '61060', latitude: 42.464768, longitude: -89.64575, grade_range: 'PreK-6' },
            { name: 'Pickett Academy', city: 'San Antonio', state: 'TX', zip: '78202', latitude: 29.42533, longitude: -98.46665, grade_range: '6-12' },
            { name: 'C L Salter Elementary School', city: 'Talladega', state: 'AL', zip: '35160', latitude: 33.455532, longitude: -86.080996, grade_range: 'K-6' },
            { name: 'Sonoma Elementary', city: 'Las Cruces', state: 'NM', zip: '88011', latitude: 32.370997, longitude: -106.735369, grade_range: 'PreK-5' },
            { name: 'Yerington Elementary School', city: 'Yerington', state: 'NV', zip: '89447', latitude: 38.995311, longitude: -119.160492, grade_range: 'PreK-4' },
            { name: 'Jackson Middle', city: 'Champlin', state: 'MN', zip: '55316', latitude: 45.152659, longitude: -93.352573, grade_range: '6-8' },
            { name: "Townsend Harris High School", city: "Flushing", state: "NY", zip: "11367", latitude: 40.73498, longitude: -73.821274, grade_range: "9-12"}
        ]

schools.each do |school|
    School.create(school)
end

school_ids = School.pluck(:id)

teachers = [{ full_name: 'Lino Stumpff  ', honorific: 'Ms.', teacher_name: 'Stumpff' },
            { full_name: 'Voncile Gemmell  ', honorific: 'Mrs.', teacher_name: 'Gemmell' },
            { full_name: 'Cristie Tenny  ', honorific: 'Mrs.', teacher_name: 'Tenny' },
            { full_name: 'Maria Heth  ', honorific: 'Dr.', teacher_name: 'Heth' },
            { full_name: 'Palmer Vanloan  ', honorific: 'Mr.', teacher_name: 'Vanloan' },
            { full_name: 'Shela Kauffman  ', honorific: 'Mrs.', teacher_name: 'Kauffman' },
            { full_name: 'Trinity Dolby  ', honorific: 'Mrs.', teacher_name: 'Dolby' },
            { full_name: 'Alexandria Shurtz  ', honorific: 'Dr.', teacher_name: 'Shurtz' },
            { full_name: 'Arnoldo Moroz  ', honorific: 'Mr.', teacher_name: 'Moroz' },
            { full_name: 'Cathie Chisolm  ', honorific: 'Dr.', teacher_name: 'Chisolm' },
            { full_name: 'Cordell Bassler  ', honorific: 'Mrs.', teacher_name: 'Bassler' },
            { full_name: 'Rosella Burrell  ', honorific: 'Mr.', teacher_name: 'Burrell' },
            { full_name: 'Saul Mink  ', honorific: 'Dr.', teacher_name: 'Mink' },
            { full_name: 'Celia Frampton  ', honorific: 'Mr.', teacher_name: 'Frampton' },
            { full_name: 'Amal Jaffee  ', honorific: 'Ms.', teacher_name: 'Jaffee' },
            { full_name: 'Madelaine Thweatt  ', honorific: 'Ms.', teacher_name: 'Thweatt' },
            { full_name: 'Janae Fails  ', honorific: 'Mrs.', teacher_name: 'Fails' },
            { full_name: 'Phillip Toye  ', honorific: 'Dr.', teacher_name: 'Toye' },
            { full_name: 'Nathalie Treat  ', honorific: 'Coach', teacher_name: 'Treat' },
            { full_name: 'Rod Mcfee  ', honorific: 'Dr.', teacher_name: 'Mcfee' },
            { full_name: 'Janeen Bizzell  ', honorific: 'Ms.', teacher_name: 'Bizzell' },
            { full_name: 'Lavada Claro  ', honorific: 'Mr.', teacher_name: 'Claro' },
            { full_name: 'Monique Castonguay  ', honorific: 'Mrs.', teacher_name: 'Castonguay' },
            { full_name: 'Vannesa Mood  ', honorific: 'Mrs.', teacher_name: 'Mood' },
            { full_name: 'Mellisa Evelyn  ', honorific: 'Mr.', teacher_name: 'Evelyn' },
            { full_name: 'Maggie Hummer  ', honorific: 'Coach', teacher_name: 'Hummer' },
            { full_name: 'Maudie Sipple  ', honorific: 'Mrs.', teacher_name: 'Sipple' },
            { full_name: 'Marcelo Lamoureux  ', honorific: 'Coach', teacher_name: 'Lamoureux' },
            { full_name: 'Cherrie Osby  ', honorific: 'Coach', teacher_name: 'Osby' },
            { full_name: 'Dannie Klump  ', honorific: 'Mrs.', teacher_name: 'Klump' },
            { full_name: 'Nenita Maust  ', honorific: 'Dr.', teacher_name: 'Maust' },
            { full_name: 'Pat Sturman  ', honorific: 'Dr.', teacher_name: 'Sturman' },
            { full_name: 'Savannah Woolsey  ', honorific: 'Dr.', teacher_name: 'Woolsey' },
            { full_name: 'Isaiah Wasko  ', honorific: 'Mrs.', teacher_name: 'Wasko' },
            { full_name: 'Hisako Powell  ', honorific: 'Ms.', teacher_name: 'Powell' },
            { full_name: 'Melony Duffield  ', honorific: 'Coach', teacher_name: 'Duffield' },
            { full_name: 'Felipa Goggans  ', honorific: 'Mrs.', teacher_name: 'Goggans' },
            { full_name: 'Clarinda Hardwick  ', honorific: 'Coach', teacher_name: 'Hardwick' },
            { full_name: 'Vanda Hambleton  ', honorific: 'Coach', teacher_name: 'Hambleton' },
            { full_name: 'Jorge Tannenbaum  ', honorific: 'Dr.', teacher_name: 'Tannenbaum' },
            { full_name: 'Lakeshia Degree  ', honorific: 'Coach', teacher_name: 'Degree' },
            { full_name: 'Berniece Ganey  ', honorific: 'Mr.', teacher_name: 'Ganey' },
            { full_name: 'Myrtle Schwer  ', honorific: 'Dr.', teacher_name: 'Schwer' },
            { full_name: 'Arline Shelnutt  ', honorific: 'Ms.', teacher_name: 'Shelnutt' },
            { full_name: 'Shemika Banes  ', honorific: 'Coach', teacher_name: 'Banes' },
            { full_name: 'Bernardine Au  ', honorific: 'Coach', teacher_name: 'Au' },
            { full_name: 'Dominick Strohl  ', honorific: 'Coach', teacher_name: 'Strohl' },
            { full_name: 'Marlys Sienkiewicz  ', honorific: 'Coach', teacher_name: 'Sienkiewicz' },
            { full_name: 'Sanda Veltri  ', honorific: 'Ms.', teacher_name: 'Veltri' },
            { full_name: 'Paul Hoyte', honorific: 'Dr.', teacher_name: 'Hoyte' }
        ]

school_ids.each_with_index do | school_id, idx|
    Teacher.create({
        full_name: teachers[idx][:full_name],
        honorific: teachers[idx][:honorific],
        teacher_name: teachers[idx][:teacher_name],
        school_id: school_id,
    })
end

teacher_ids = Teacher.pluck(:id)

teacher_ids.each do |id|
    teacher = Teacher.find(id)
    User.create({
        email: teacher.teacher_name.downcase+"@gmail.com",
        is_teacher: true,
        password_digest: BCrypt::Password.create("password"),
        session_token: SecureRandom.urlsafe_base64,         
        display_name: teacher.honorific+" "+teacher.teacher_name,
    })
end

donors = [  { full_name: 'Ngoc Kingsley', last_name: 'Kingsley' },
            { full_name: 'Jennie Benge', last_name: 'Benge' },
            { full_name: 'Kera Sarro', last_name: 'Sarro' },
            { full_name: 'Marty Milby', last_name: 'Milby' },
            { full_name: 'Antonio Dreier', last_name: 'Dreier' },
            { full_name: 'Marketta Virgil', last_name: 'Virgil' },
            { full_name: 'Shante Gabriel', last_name: 'Gabriel' },
            { full_name: 'Davida Kratzer', last_name: 'Kratzer' },
            { full_name: 'Karissa Willson', last_name: 'Willson' },
            { full_name: 'Toshia Tovey', last_name: 'Tovey' },
            { full_name: 'Harriett Higgenbotham', last_name: 'Higgenbotham' },
            { full_name: 'Cristi Creed', last_name: 'Creed' },
            { full_name: 'Mabelle Pitts', last_name: 'Pitts' },
            { full_name: 'Irwin Wargo', last_name: 'Wargo' },
            { full_name: 'Wanda Hardegree', last_name: 'Hardegree' },
            { full_name: 'Mireille Valazquez', last_name: 'Valazquez' },
            { full_name: 'Andre Pieroni', last_name: 'Pieroni' },
            { full_name: 'Jewel Wohlgemuth', last_name: 'Wohlgemuth' },
            { full_name: 'Marceline Lampman', last_name: 'Lampman' },
            { full_name: 'Tora Poythress', last_name: 'Poythress' },
            { full_name: 'Tim Yearta', last_name: 'Yearta' },
            { full_name: 'Deandra Eggebrecht', last_name: 'Eggebrecht' },
            { full_name: 'Dorene Alkire', last_name: 'Alkire' },
            { full_name: 'Pearlene Villafane', last_name: 'Villafane' },
            { full_name: 'Cari Stalzer', last_name: 'Stalzer' },
            { full_name: 'Isidro Zhu', last_name: 'Zhu' },
            { full_name: 'Clement Twiford', last_name: 'Twiford' },
            { full_name: 'Shaniqua Gage', last_name: 'Gage' },
            { full_name: 'Kermit Gerald', last_name: 'Gerald' },
            { full_name: 'Benton Leath', last_name: 'Leath' },
            { full_name: 'Margarite Hermann', last_name: 'Hermann' },
            { full_name: 'Jazmine Dutton', last_name: 'Dutton' },
            { full_name: 'Maxie Grider', last_name: 'Grider' },
            { full_name: 'Robbin Merritt', last_name: 'Merritt' },
            { full_name: 'Jamaal Sammons', last_name: 'Sammons' },
            { full_name: 'Deeanna Kendig', last_name: 'Kendig' },
            { full_name: 'Darren Awong', last_name: 'Awong' },
            { full_name: 'Salvatore Pates', last_name: 'Pates' },
            { full_name: 'Calvin Arevalo', last_name: 'Arevalo' },
            { full_name: 'Camelia Host', last_name: 'Host' },
            { full_name: 'Marilyn Backstrom', last_name: 'Backstrom' },
            { full_name: 'Juli Lung', last_name: 'Lung' },
            { full_name: 'Roland Mattocks', last_name: 'Mattocks' },
            { full_name: 'Nova Marchetti', last_name: 'Marchetti' },
            { full_name: 'Jaime Ruple', last_name: 'Ruple' },
            { full_name: 'Scotty Kittredge', last_name: 'Kittredge' },
            { full_name: 'Roseanna Grass', last_name: 'Grass' },
            { full_name: 'Lonny Jernigan', last_name: 'Jernigan' },
            { full_name: 'Lakenya Keifer', last_name: 'Keifer' },
            { full_name: 'Corliss Gibby', last_name: 'Gibby' }
        ]

donors.each do |donor|
    User.create({
        email: donor[:last_name].downcase+"@gmail.com",
        is_teacher: false,
        password_digest: BCrypt::Password.create("password"),
        session_token: SecureRandom.urlsafe_base64,         
        display_name: donor[:full_name],
    })
end

categories = [  { category: 'Computer Science', group: 'subject'},
                { category: 'Health & Sports', group: 'subject'},
                { category: 'History & Civics', group: 'subject'},
                { category: 'Literacy & Language', group: 'subject'},
                { category: 'Math & Science', group: 'subject'},
                { category: 'Music & The Arts', group: 'subject'},
                { category: 'Special Needs', group: 'subject'},
                { category: 'Office Supplies', group: 'need'},
                { category: 'Books', group: 'need'},
                { category: 'Computers & Tablets', group: 'need'},
                { category: 'Field Trips', group: 'need'},
                { category: 'Instructional Technology', group: 'need'},
                { category: 'Reading Nooks, Desks & Storage', group: 'need'},
                { category: 'Writing Instruments', group: 'need'}
            ]

categories.each do |category|
    Category.create(category)
end

title_adjectives = ['Adventurous',
                    'Amazing',
                    'Awesome',
                    'Curious',
                    'Excellent',
                    'Fabulous',
                    'Fantastic',
                    'Gifted',
                    'Outstanding',
                    'Remarkable',
                    'Smart',
                    'Spectacular',
                    'Stellar',
                    'Super',
                    'Talented'
                    ]

title_nouns = ['Kids', 'Students', 'Children']

title_verbs = ['Exploring', 'Expanding', 'Broadening', 'Learning More About', 'Discovering', 'Finding']
    
title_objects = ['Their Horizons','Their Interests','Their World','Their Imaginations','Their Passions','Their Educations','Their Dreams','Their Hobbies']

teacher_ids.each do |id|
    topic = Category.where(group: 'subject').sample
    need = Category.where(group: 'need').sample
    title = title_adjectives.sample + " " + title_nouns.sample + " " + title_verbs.sample + " " + title_objects.sample
    blurb = "Help me give my students " + need.category.downcase + " for their " + topic.category.downcase + " lessons"

    project = Project.create({
        title: title,
        blurb: blurb,
        description: ipsum,
        about_students: ipsum,
        goal: rand(250..1000),
        teacher_id: id
    })

    CategoryAssociation.create({
        project_id: project.id,
        category_id: topic.id
    })

    CategoryAssociation.create({
        project_id: project.id,
        category_id: need.id
    })
end

comments = ['Great cause',
            'Happy to help',
            'Best of luck',
            'Wishing everyone the best',
            'Thanks for teaching',
            'Proud parent',
            'Proud alumn',
            'Hope you get more support',
            'This is close to my heart',
            ''
            ]

90.times {
    user = User.all.sample
    project = Project.all.sample
    
    Donation.create({
        user_id: user.id,
        display_name: user.display_name,
        comment: comments.sample,
        project_id: project.id,
        donation_amount: rand(50..100)
    })
}

30.times {
    user = User.all.sample
    project = Project.all.sample
    
    Donation.create({
        user_id: user.id,
        display_name: 'Anonymous',
        anonymous: true,
        comment: comments.sample,
        project_id: project.id,
        donation_amount: rand(50..100)
    })
}
