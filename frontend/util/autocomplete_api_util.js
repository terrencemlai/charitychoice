export const autocompleteSchools = (searchText) => (
    $.ajax({
        method: 'GET',
        url: 'api/auto/schools',
        data: searchText
    })
)


