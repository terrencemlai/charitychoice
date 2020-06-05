import * as DonationAPIUtil from '../util/donation_api_util';

export const COMPLETE_DONATION = "COMPLETE_DONATION";
export const RECEIVE_DONATION_ERRORS = "RECEIVE_DONATION_ERRORS";

const completeDonation = () => ({
    type: COMPLETE_DONATION,
})

const receiveDonationErrors = (errors) => ({
    type: RECEIVE_DONATION_ERRORS,
    errors
})

export const createDonation = (donation) => dispatch => (
    DonationAPIUtil.createDonation(donation)
    .then(donation => (dispatch(completeDonation())
    ), errors => dispatch(receiveDonationErrors(errors.responseJSON)))
)