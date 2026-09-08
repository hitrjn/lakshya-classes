export type Faculty = {
  name: string
  subject: string
  role?: string
  image: string
}

export const faculty: Faculty[] = [
  {
    name: 'Vishal Kumar Mishra',
    subject: 'Director',
    role: 'Founder',
    image: '/faculty/vishal-kumar-mishra.png',
  },
  {
    name: 'Rajnish Dubey',
    subject: 'Mathematics',
    image: '/faculty/rajnish-dubey.png',
  },
  {
    name: 'Bipin Kumar',
    subject: 'Mathematics',
    image: '/faculty/bipin-kumar.png',
  },
  {
    name: 'Atul Ranjan',
    subject: 'Physics',
    image: '/faculty/atul-ranjan.png',
  },
  {
    name: 'Sujeet Kumar Mishra',
    subject: 'Science',
    image: '/faculty/sujeet-kumar-mishra.png',
  },
  {
    name: 'Kaushal Kumar',
    subject: 'Social Studies',
    image: '/faculty/kaushal-kumar.png',
  },
  {
    name: 'Saroj Kumar',
    subject: 'Sanskrit & SST',
    image: '/faculty/saroj-kumar.png',
  },
]

export type Location = {
  name: string
  address: string
  city: string
  /** Used to render an embedded map and an "open in maps" link without needing a hard-coded iframe URL. */
  mapQuery?: string
  /** Optional direct Google Maps / Maps.app.goo.gl link (used for "open in maps"). */
  mapUrl?: string
}

export const locations: Location[] = [
  {
    name: 'Ranchi Centre 1',
    address:
      '1st Floor, H Square Building, Circular Road, Opp. Pranami Heights, Lalpur',
    city: 'Ranchi - 834001',
    mapQuery:
      'Lakshya Classes Ranchi Centre 1, 1st Floor, H Square Building, Circular Road, Opp. Pranami Heights, Lalpur, Ranchi 834001',
  },
  {
    name: 'Ranchi Centre 2',
    address:
      '2nd Floor, Rohini Complex, Circular Road, Opp. Apsara Hotel, Lalpur',
    city: 'Ranchi - 834001',
    mapQuery:
      'Lakshya Classes Ranchi Centre 2, 2nd Floor, Rohini Complex, Circular Road, Opp. Apsara Hotel, Lalpur, Ranchi 834001',
  },
  {
    name: 'Arrah Centre',
    address: 'Street No. 03, Near Tribhuwani Niwas, Maharaja Hata, Katira',
    city: 'Arrah - 802301',
    mapQuery:
      'Lakshya Classes Arrah Centre, Street No. 03, Near Tribhuwani Niwas, Maharaja Hata, Katira, Arrah 802301',
  },
  {
    name: 'Patna / Danapur Centre',
    address: 'Saguna More, Danapur',
    city: 'Patna',
    mapQuery: 'Lakshya Classes Danapur, Saguna More, Danapur, Patna',
  },
]
