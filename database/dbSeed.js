const db = require('./index.js');

const seedPropertyDetails = function() {
  let propertyCount = 100;
  console.log('got into seeding');
  let propType = {
    'Apartment': ['Condominium', 'Serviced apartment', 'Loft'],
    'House': ['Villa', 'Townhouse', 'Cottage', 'Bungalow', 'Cabin'],
    'Secondary Unit': ['Guest Suite', 'Guesthouse', 'Farm stay'],
    'Unique Space': ['Barn', 'Tiny house', 'Farm stay', 'Camper/RV', 'Boat', 'Campsite', 'Earth house'],
    'Bed and breakfast': ['Farm stay', 'Nature lodge'],
    'Boutique hotel': ['Boutique hotel', 'Hostel', 'Resort', 'Serviced apartment']
  };
  
  let spaceAvail = ['Private room', 'Entire place', 'Shared room'];

  db.connection.query('INSERT INTO Property_details (property_type, property_narrow_type, property_space_available, dedicated_guest_space, registered_business, min_length_stay, max_length_stay, guest_capacity, rooms, bathrooms) VALUES ("Apartment", "Loft", "Shared room", true, false, 2, 5, 10, 5, 2)', (err, result)=>{
    if (err) {
      throw err;
    }
    console.log(result);
  });
};

module.exports.seedPropertyDetails = seedPropertyDetails;