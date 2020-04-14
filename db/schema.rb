# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_14_154643) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "category", null: false
    t.string "group", null: false
  end

  create_table "category_associations", force: :cascade do |t|
    t.integer "project_id", null: false
    t.integer "category_id", null: false
    t.index ["category_id"], name: "index_category_associations_on_category_id"
    t.index ["project_id"], name: "index_category_associations_on_project_id"
  end

  create_table "donations", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "display_name", null: false
    t.boolean "anonynmous", default: false, null: false
    t.string "comment"
    t.integer "project_id", null: false
    t.float "donation_amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_donations_on_project_id"
    t.index ["user_id"], name: "index_donations_on_user_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.text "about_students", null: false
    t.integer "teacher_id", null: false
    t.float "goal", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "blurb", null: false
    t.index ["teacher_id"], name: "index_projects_on_teacher_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.string "grade_range", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "full_name", null: false
    t.string "teacher_name", null: false
    t.integer "school_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "honorific", null: false
    t.index ["school_id"], name: "index_teachers_on_school_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.boolean "is_teacher", default: false
    t.integer "teacher_id"
    t.string "password_digest"
    t.string "session_token"
    t.string "display_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
