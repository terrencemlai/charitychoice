json.array! @schools do |school|
    json.id school.id
    json.name school.name + ", " + school.city + ", " + school.state
end 
