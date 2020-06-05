
class Api::DonationsController <  ApplicationController

    def create
        @donation = Donation.new(donation_params)
 
        if @donation.save
            render json: @donation
        else 
            render json: @donation.errors.full_messages, status: 422
        end
    end


    private
    def donation_params
        params.require(:donation).permit(:user_id, :display_name, :anonymous, :project_id, :donation_amount)
    end



end