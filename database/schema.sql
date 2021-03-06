CREATE DATABASE property;

USE property;

CREATE TABLE Property_details(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    property_type text NOT NULL,  -- Apartment, House, Secondary Unit, Unique Space, Bed and breakfast, Boutique hotel
    property_narrow_type text NOT NULL,
    -- Apartment(Apartment, Condominium, Serviced apartment, Loft), 
    -- House(House, Villa, Townhouse, Cottage, Bungalow, Cabin), 
    -- Secondary Unit(Guest Suite, Guesthouse, Farm stay),
    -- Unique space(Barn, Tiny house, Farm Stay, Camper/RV, Boat, Campsite, Earth house), 
    -- Bed and Breakfast(Bed and Breakfast, Farm Stay, Nature lodge),
    -- Boutique hotel(Hotel, Boutique hotel, Hostel, Resort, Serviced apartment)
    property_space_available text NOT NULL, -- Private Room, Entire place, Shared Room
    dedicated_guest_space BOOLEAN, -- setup for guest or host has belongings there
    registered_business BOOLEAN,
    min_length_stay integer,
    max_length_stay integer,
    guest_capacity integer NOT NULL,
    rooms integer NOT NULL,
    beds integer NOT NULL,
    bathrooms integer NOT NULL,
    property_description text,
    property_id integer
);

CREATE TABLE Rules(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    check_in_time integer NOT NULL,
    check_out_time integer NOT NULL,
    self_check_out BOOLEAN,
    smoking BOOLEAN,
    events BOOLEAN,
    pets BOOLEAN,
    infants BOOLEAN,
    children_suitable BOOLEAN,
    additional_rules JSON -- to add an array of additional rules
);

CREATE TABLE Sanitations(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    sanitize_surfaces BOOLEAN,
    approved_products BOOLEAN,
    thoroughly_clean BOOLEAN,
    mask_glove BOOLEAN,
    wash_linen BOOLEAN,
    local_guidance BOOLEAN
);
