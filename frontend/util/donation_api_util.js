export const createDonation = (donation) => {
    return (
      $.ajax({
        method: 'POST',
        url: `api/donations`,
        data: donation,
      }))
  }