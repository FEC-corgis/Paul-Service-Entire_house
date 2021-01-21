const db = require('./index.js');

const booleanFillers = () => {
  return Math.random() < 0.5;
};

const maxStay = (min) => {
  return Math.floor(Math.random() * (15 - min) + min);
};

const seedPropertyDetails = function() {
  let propertyCount = 100;
  let propType = {
    'Apartment': ['Condominium', 'Serviced apartment', 'Loft'],
    'House': ['Villa', 'Townhouse', 'Cottage', 'Bungalow', 'Cabin'],
    'Secondary Unit': ['Guest Suite', 'Guesthouse', 'Farm stay'],
    'Unique Space': ['Barn', 'Tiny house', 'Farm stay', 'Camper/RV', 'Boat', 'Campsite', 'Earth house'],
    'Bed and breakfast': ['Farm stay', 'Nature lodge'],
    'Boutique hotel': ['Boutique hotel', 'Hostel', 'Resort', 'Serviced apartment']
  };
  let spaceAvail = ['Private room', 'Entire place', 'Shared room'];
  let adjectives = ['huge', 'extraordinary', 'amazing', 'pleasant', 'cozy', 'enjoyable', 'delightful', 'charming', 'beautiful', 'fine', 'pleasing', 'elegant', 'alluring', 'lovely', 'attractive', 'chic', 'enchanting', 'irresistible', 'stimulating' ];
  let attraction = ['park', 'amusement park', 'beach', 'campsite', 'shopping outlet', 'farmers market', 'resort', 'famous trail', 'night life plaza', 'winery', 'golf course', 'dog park', 'rose garden', 'museum', 'zoo', 'recreation area'];

  while (propertyCount > 0) {
    let typeArr = Object.keys(propType);
    let type = typeArr[Math.floor(Math.random() * 6)];
    let min = Math.ceil(Math.random() * 6);
    let narrow = propType[type][Math.floor(Math.random() * propType[type].length)];
    let description = `This ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${type} is ${Math.ceil(Math.random() * 30)} minutes away from a ${attraction[Math.floor(Math.random() * attraction.length)]} and walkable distance from a ${attraction[Math.floor(Math.random() * attraction.length)]}. It's the perfect location for you and more! It accompanies ${min} with ease, and has plenty of room for lounging. You'll have a ${adjectives[Math.floor(Math.random() * adjectives.length)]} time here at our ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${narrow}! Reserve your stay now!!`;
    db.connection.query(`INSERT INTO Property_details (property_type, property_narrow_type, property_space_available, dedicated_guest_space, registered_business, min_length_stay, max_length_stay, guest_capacity, rooms, bathrooms, property_description) VALUES ("${type}", "${narrow}", "${spaceAvail[Math.floor(Math.random() * 3)]}",${booleanFillers()} , ${booleanFillers()}, ${min}, ${maxStay(min)}, ${Math.ceil(Math.random() * 11)}, ${Math.ceil(Math.random() * 9)}, ${Math.ceil(Math.random() * 4)}, "${description}" )`, (err, result)=>{
      if (err) {
        throw err;
      }
    });
    let infChild = booleanFillers();
    db.connection.query(`INSERT INTO Rules (check_in_time, check_out_time, self_check_out, smoking, events, pets, infants, children_suitable) VALUES (${Math.ceil(Math.random() * 12)}, 4, ${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()})`, (err, result)=>{
      if (err) { throw err; }
    });
    db.connection.query(`INSERT INTO Sanitation (sanitize_surfaces, approved_products, thoroughly_clean, mask_glove, wash_linen, local_guidance) VALUES (${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()}, ${booleanFillers()})`, (err, result)=>{
      if (err) { throw err; }
    });
    propertyCount--;
  }
};


module.exports.seedPropertyDetails = seedPropertyDetails;