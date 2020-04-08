

class Api::SchoolsController < ApplicationController

    def index
        @schools = School.all 
        render 'api/schools/index'
    end

end