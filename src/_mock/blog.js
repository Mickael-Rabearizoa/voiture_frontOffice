import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'Toyota Corolla',
  'Honda Civic',
  'Ford Mustang',
  'Chevrolet Camaro',
  'BMW 3 Series',
  'Mercedes-Benz C-Class',
  'Audi A4',
  'Volkswagen Golf',
  'Subaru Outback',
  'Tesla Model S',
  'Lamborghini Huracan',
  'Ferrari 488',
  'Porsche 911',
  'Mazda MX-5',
  'Jeep Wrangler',
  'Land Rover Range Rover',
  'Volvo XC90',
  'Kia Soul',
  'Hyundai Sonata',
  'Nissan Altima',
  'Jaguar F-Pace',
  'Lexus RX',
  'Acura MDX',
  'Infiniti Q50',
  'Buick Encore',
  'Cadillac Escalade',
  'Lincoln Navigator',
  'GMC Sierra',
  'Chrysler Pacifica',                                                                                 
  'Dodge Challenger',
];

export const posts = [...Array(23)].map((_, index) => ({
  id: faker.string.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  prix: faker.number.float(99999999),
  anne: faker.number.int(9999),
  author: {
    name: faker.person.fullName(),
    avatarUrl: `/assets/images/avatars/avatar.jpg`,
  },

}));
