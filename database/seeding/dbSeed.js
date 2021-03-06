const { Property_details, Rules, Sanitations } = require('../../models');

const booleanFillers = () => {return Math.random() < 0.5;};

const maxStay = (min) => {return Math.floor(Math.random() * (15 - min) + min);};

const seedPropertyDetails =()=> {
  let propertyCount = 1;
  let propType = {
    'Apartment': ['Condominium', 'Serviced apartment', 'Loft'],
    'House': ['Villa', 'Townhouse', 'Cottage', 'Bungalow', 'Cabin'],
    'Secondary Unit': ['Guest Suite', 'Guesthouse', 'Farm stay'],
    'Unique Space': ['Barn', 'Tiny house', 'Farm stay', 'Camper/RV', 'Boat', 'Campsite', 'Earth house'],
    'Bed and breakfast': ['Farm stay', 'Nature lodge'],
    'Boutique hotel': ['Boutique hotel', 'Hostel', 'Resort', 'Serviced apartment']
  };
  let spaceAvail = ['Private room', 'Entire', 'Shared room'];
  let adjectives = ['huge', 'extraordinary', 'amazing', 'pleasant', 'cozy', 'enjoyable', 'delightful', 'charming', 'beautiful', 'fine', 'pleasing', 'elegant', 'alluring', 'lovely', 'attractive', 'chic', 'enchanting', 'irresistible', 'stimulating' ];
  let attraction = ['park', 'amusement park', 'beach', 'campsite', 'shopping outlet', 'farmers market', 'resort', 'famous trail', 'night life plaza', 'winery', 'golf course', 'dog park', 'rose garden', 'museum', 'zoo', 'recreation area'];

  while (propertyCount <= 100) {
    let typeArr = Object.keys(propType);
    let type = typeArr[Math.floor(Math.random() * typeArr.length)];
    let min = Math.ceil(Math.random() * 6);
    let narrow = propType[type][Math.floor(Math.random() * propType[type].length)];
    let description = `This ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${type} is ${Math.ceil(Math.random() * 30)} minutes away from a ${attraction[Math.floor(Math.random() * attraction.length)]} and walkable distance from a ${attraction[Math.floor(Math.random() * attraction.length)]}. It's the perfect location for you and more! It accompanies ${min} with ease, and has plenty of room for lounging. You'll have a ${adjectives[Math.floor(Math.random() * adjectives.length)]} time here at our ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${narrow}! Reserve your stay now!!`;

    Property_details.create({
     property_type: type,
     property_narrow_type: narrow,
     property_space_available: spaceAvail[Math.floor(Math.random() * 3)],
     dedicated_guest_space: booleanFillers(),
     registered_business: booleanFillers(),
     min_length_stay: min,
     max_length_stay: maxStay(min),
     guest_capacity: Math.ceil(Math.random() * 11),
     rooms: Math.ceil(Math.random() * 9),
     beds: Math.ceil(Math.random() * 11),
     bathrooms: Math.ceil(Math.random() * 4),
     property_description: description,
     property_id: null
    });

    Rules.create({
     check_in_time: Math.ceil(Math.random() * 12),
     check_out_time: 4,
     self_check_out: booleanFillers(),
     smoking: booleanFillers(),
     events: booleanFillers(), 
     pets: booleanFillers(),
     infants: booleanFillers(),
     children_suitable: booleanFillers() 
    });

    Sanitations.create({
      sanitize_surfaces: booleanFillers(),
      approved_products: booleanFillers(),
      thoroughly_clean: booleanFillers(),
      mask_glove: booleanFillers(),
      wash_linen: booleanFillers(),
      local_guidance: booleanFillers()
    });

    propertyCount++;
  }
};

module.exports.seedPropertyDetails = seedPropertyDetails;