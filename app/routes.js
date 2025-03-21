//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/name', function (request, response) {

    var destination = request.session.data['destination']
    if (destination == "Moon") {
        response.redirect("/name")
    }
    else if (destination == "Mars") {
        response.redirect("/name")
    } else {
        response.redirect("no-flights")
    }
})
