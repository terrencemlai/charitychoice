

class Api::Auto::SchoolsController < ApplicationController

    def show
        searchText = "%"+params[:searchText].downcase+"%"
        @schools =  School
                    .where("LOWER(name) like ?", searchText)
                    .or(School.where("LOWER(city) like ?", searchText))
                    .order(:name)
                    .limit(5)
        render 'api/auto/schools'
    end

end