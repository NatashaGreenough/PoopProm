const toiletData = [
  {
    id: 1,
    toiletName: "Lisette Gerlach toilet",
    reviewStar: 5,
    photo: "",
    address: "11309 Tidewater Trail",
    district: "Vermont",
    province: "Fredericksburg",
    zipCode: "22408",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 2,
    toiletName: "John Smith's Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Elm Street",
    district: "Springfield",
    province: "Illinois",
    zipCode: "62701",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 3,
    toiletName: "Maria's Bathroom Oasis",
    reviewStar: 5,
    photo: "",
    address: "789 Pine Avenue",
    district: "Oakland",
    province: "California",
    zipCode: "94601",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 4,
    toiletName: "Clean and Cozy Restroom",
    reviewStar: 4,
    photo: "",
    address: "1010 Main Street",
    district: "Raleigh",
    province: "North Carolina",
    zipCode: "27601",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 5,
    toiletName: "Sandy Shores Beachfront Restroom",
    reviewStar: 5,
    photo: "",
    address: "123 Beach Road",
    district: "Miami Beach",
    province: "Florida",
    zipCode: "33109",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 6,
    toiletName: "Green Valley Park Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Park Avenue",
    district: "Phoenix",
    province: "Arizona",
    zipCode: "85001",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 7,
    toiletName: "Riverside Plaza Restroom",
    reviewStar: 3,
    photo: "",
    address: "789 Riverside Drive",
    district: "Chicago",
    province: "Illinois",
    zipCode: "60601",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 8,
    toiletName: "Mountain View Rest Stop",
    reviewStar: 4,
    photo: "",
    address: "101 Mountain Road",
    district: "Denver",
    province: "Colorado",
    zipCode: "80201",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 9,
    toiletName: "City Center Mall Restroom",
    reviewStar: 5,
    photo: "",
    address: "789 Mall Street",
    district: "New York",
    province: "New York",
    zipCode: "10001",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 10,
    toiletName: "Sunny Breezes Beach Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Beachside Boulevard",
    district: "Los Angeles",
    province: "California",
    zipCode: "90001",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 11,
    toiletName: "Downtown Park Restroom",
    reviewStar: 3,
    photo: "",
    address: "101 Park Street",
    district: "San Francisco",
    province: "California",
    zipCode: "94101",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 12,
    toiletName: "Pinecrest Picnic Area Restroom",
    reviewStar: 5,
    photo: "",
    address: "789 Picnic Road",
    district: "Portland",
    province: "Oregon",
    zipCode: "97201",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 13,
    toiletName: "Grand Central Station Restroom",
    reviewStar: 4,
    photo: "",
    address: "101 Grand Central Avenue",
    district: "New York",
    province: "New York",
    zipCode: "10002",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 14,
    toiletName: "Lakeview Park Restroom",
    reviewStar: 5,
    photo: "",
    address: "456 Lakeview Lane",
    district: "Chicago",
    province: "Illinois",
    zipCode: "60602",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 15,
    toiletName: "Sunset Beach Restroom",
    reviewStar: 4,
    photo: "",
    address: "789 Sunset Drive",
    district: "Los Angeles",
    province: "California",
    zipCode: "90002",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 16,
    toiletName: "City Park Restroom",
    reviewStar: 3,
    photo: "",
    address: "101 Park Lane",
    district: "San Francisco",
    province: "California",
    zipCode: "94102",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 17,
    toiletName: "Riverfront Park Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Riverfront Road",
    district: "Portland",
    province: "Oregon",
    zipCode: "97202",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 18,
    toiletName: "Downtown Shopping Center Restroom",
    reviewStar: 5,
    photo: "",
    address: "789 Shopping Center Street",
    district: "New York",
    province: "New York",
    zipCode: "10003",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 19,
    toiletName: "Beachside Cafe Restroom",
    reviewStar: 4,
    photo: "",
    address: "101 Beachside Drive",
    district: "Los Angeles",
    province: "California",
    zipCode: "90003",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 20,
    toiletName: "Central Park Restroom",
    reviewStar: 3,
    photo: "",
    address: "456 Central Park Avenue",
    district: "San Francisco",
    province: "California",
    zipCode: "94103",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 21,
    toiletName: "Riverwalk Plaza Restroom",
    reviewStar: 5,
    photo: "",
    address: "789 Riverwalk Street",
    district: "Chicago",
    province: "Illinois",
    zipCode: "60603",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 22,
    toiletName: "Mountaintop Rest Stop",
    reviewStar: 4,
    photo: "",
    address: "101 Mountaintop Road",
    district: "Denver",
    province: "Colorado",
    zipCode: "80202",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 23,
    toiletName: "Downtown Mall Restroom",
    reviewStar: 3,
    photo: "",
    address: "456 Mall Street",
    district: "New York",
    province: "New York",
    zipCode: "10004",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 24,
    toiletName: "Oceanfront Restroom",
    reviewStar: 5,
    photo: "",
    address: "789 Oceanfront Drive",
    district: "Los Angeles",
    province: "California",
    zipCode: "90004",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 25,
    toiletName: "City Hall Restroom",
    reviewStar: 4,
    photo: "",
    address: "101 City Hall Avenue",
    district: "San Francisco",
    province: "California",
    zipCode: "94104",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 26,
    toiletName: "Lakefront Park Restroom",
    reviewStar: 3,
    photo: "",
    address: "456 Lakefront Road",
    district: "Chicago",
    province: "Illinois",
    zipCode: "60604",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 27,
    toiletName: "Beachside Boardwalk Restroom",
    reviewStar: 4,
    photo: "",
    address: "789 Boardwalk Street",
    district: "Los Angeles",
    province: "California",
    zipCode: "90005",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 28,
    toiletName: "City Park Picnic Area Restroom",
    reviewStar: 5,
    photo: "",
    address: "101 Picnic Road",
    district: "Portland",
    province: "Oregon",
    zipCode: "97203",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 29,
    toiletName: "Downtown Library Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Library Street",
    district: "New York",
    province: "New York",
    zipCode: "10005",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 30,
    toiletName: "Seaside Restroom",
    reviewStar: 3,
    photo: "",
    address: "789 Seaside Drive",
    district: "Los Angeles",
    province: "California",
    zipCode: "90006",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 31,
    toiletName: "Central Plaza Restroom",
    reviewStar: 5,
    photo: "",
    address: "101 Plaza Avenue",
    district: "San Francisco",
    province: "California",
    zipCode: "94105",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 32,
    toiletName: "Mountain View Picnic Area Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Picnic Road",
    district: "Portland",
    province: "Oregon",
    zipCode: "97204",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 33,
    toiletName: "Downtown Convention Center Restroom",
    reviewStar: 3,
    photo: "",
    address: "789 Convention Center Street",
    district: "New York",
    province: "New York",
    zipCode: "10006",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 34,
    toiletName: "Ocean View Restroom",
    reviewStar: 5,
    photo: "",
    address: "101 Ocean View Avenue",
    district: "Los Angeles",
    province: "California",
    zipCode: "90007",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 35,
    toiletName: "City Center Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Center Street",
    district: "San Francisco",
    province: "California",
    zipCode: "94106",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 36,
    toiletName: "Riverfront Plaza Restroom",
    reviewStar: 3,
    photo: "",
    address: "789 Plaza Street",
    district: "Chicago",
    province: "Illinois",
    zipCode: "60605",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 37,
    toiletName: "Mountaintop Picnic Area Restroom",
    reviewStar: 5,
    photo: "",
    address: "101 Picnic Road",
    district: "Portland",
    province: "Oregon",
    zipCode: "97205",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 38,
    toiletName: "Downtown Theater Restroom",
    reviewStar: 4,
    photo: "",
    address: "456 Theater Street",
    district: "New York",
    province: "New York",
    zipCode: "10007",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },

  {
    id: 39,
    toiletName: "Harborfront Restroom",
    reviewStar: 3,
    photo: "",
    address: "789 Harborfront Drive",
    district: "Los Angeles",
    province: "California",
    zipCode: "90008",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: false },
      { id: 2, name: "Squat toilet", status: true },
      { id: 3, name: "Auto toilet", status: true },
      { id: 4, name: "Handicap toilet", status: true },
    ],
  },

  {
    id: 40,
    toiletName: "City Garden Restroom",
    reviewStar: 5,
    photo: "",
    address: "101 Garden Avenue",
    district: "San Francisco",
    province: "California",
    zipCode: "94107",
    toiletTypes: [
      { id: 1, name: "Bidet spray", status: true },
      { id: 2, name: "Squat toilet", status: false },
      { id: 3, name: "Auto toilet", status: false },
      { id: 4, name: "Handicap toilet", status: false },
    ],
  },
];

export default toiletData;