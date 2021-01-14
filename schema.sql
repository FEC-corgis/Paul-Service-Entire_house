CREATE DATABASE property_details;

USE property_details;

CREATE TABLE Property_details(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    property_type text NOT NULL,  -- Apartment, House, Secondary Unit, Unique Space, Bed and breakfast, Boutique hotel
    property_narrow_type text NOT NULL 
    -- Apartment(Apartment, Condominium, Serviced apartment, Loft), 
    -- House(House, Villa, Townhouse, Cottage, Bungalow, Cabin), 
    -- Secondary Unit(Guest Suite, Guesthouse, Farm stay),
    -- Unique space(Barn, Tiny house, Farm Stay, Camper/RV, Boat, Campsite, Earth house), 
    -- Bed and Breakfast(Bed and Breakfast, Farm Stay, Nature lodge),
    -- Boutique hotel(Hotel, Boutique hotel, Hostel, Resort, Serviced apartment)
    property_space_available text NOT NULL, -- Private Room, Entire place, Shared Room
    dedicated_guest_space BOOLEAN, -- setup for guest or host has belongings there
    registered_business BOOLEAN,
    cancellation_duration integer,
    guest_capacity integer NOT NULL,
    rooms integer NOT NULL,
    bathrooms integer NOT NULL,
    property_description text
);

CREATE TABLE Rules(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    check_in_time DATETIME NOT NULL,
    check_out_time DATETIME NOT NULL,
    self_check_out BOOLEAN,
    smoking BOOLEAN,
    events BOOLEAN,
    pets BOOLEAN,
    infants BOOLEAN,
    children_suitable BOOLEAN,
    additional_rules JSON, -- to add an array of additional rules
    FOREIGN KEY (id) REFERENCES property_details(id) 
);

CREATE TABLE Sanitation(
    id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
    sanitize_surfaces BOOLEAN,
    approved_products BOOLEAN,
    thoroughly_clean BOOLEAN,
    mask_glove BOOLEAN,
    wash_linen BOOLEAN,
    local_guidance BOOLEAN,
    FOREIGN KEY (id) REFERENCES property_details(id) 
);

Create TABLE Property_Rules(
    FOREIGN KEY (id) REFERENCES Property_details(id) 
    FOREIGN KEY (id) REFERENCES Rules(id) 
);

Create TABLE Property_Sanitation(
    FOREIGN KEY (id) REFERENCES Property_details(id) 
    FOREIGN KEY (id) REFERENCES Saniation(id) 
);