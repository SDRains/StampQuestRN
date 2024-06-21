import locationImages from '@/src/components/images'
import locationStamps from '@/src/components/stamps'

/* COMPONENT-SPECIFIC DATA */
export const locationOfMonth = 4
export const trendingLocations = [
    {
        locationID: 1
    },
    {
        locationID: 3
    },
    {
        locationID: 2
    },
    {
        locationID: 5
    }
]
export const travelList = [
    {
        locationID: 3
    },
    {
        locationID: 1
    },
    {
        locationID: 4
    }
]
export const popularStories = [
    {
        image: locationImages.azImages.sedona,
        title: 'The Wonders of the Sonoran Desert',
        link: '',
        availableStamps: 8
    },
    {
        image: locationImages.caliImages.californiaCoast,
        title: 'PCH 1 - A Drivers Dream',
        link: '',
        availableStamps: 13
    }
]

/* ALL LOCATIONS DATA */
export const allLocationsData = [
    {
        id: 1,
        name: 'Santa Monica Pier',
        address1: '200 Santa Monica Pier',
        city: 'Santa Monica',
        state: 'California',
        zip: '90401',
        image: locationImages.caliImages.santaMonicaPier,
        stamp: locationStamps.blankStamp,
        description: 'The Santa Monica Pier, located in Santa Monica, California, is an iconic attraction featuring a historic carousel, an aquarium, and the Pacific Park amusement park with its famous Ferris wheel. Visitors can enjoy fishing, dining, and shopping while taking in the stunning ocean views. The pier is also known for its vibrant street performers and lively atmosphere, making it a beloved destination for locals and tourists alike.'
    },
    {
        id: 2,
        name: 'Golden Gate Bridge',
        address1: 'Golden Gate Bridge Plaza',
        city: 'San Francisco',
        state: 'California',
        zip: '94129',
        image: locationImages.caliImages.goldenGateBridge,
        stamp: locationStamps.blankStamp,
        description: 'The Golden Gate Bridge, spanning the Golden Gate Strait in San Francisco, California, is an engineering marvel and one of the most photographed landmarks in the world. Completed in 1937, this suspension bridge features distinctive Art Deco design elements and a striking International Orange color. Offering stunning views of the San Francisco Bay and the Pacific Ocean, it attracts millions of visitors annually.'
    },
    {
        id: 3,
        name: 'Griffith Park Observatory',
        address1: '2800 E Observatory Rd',
        city: 'Los Angelex',
        state: 'California',
        zip: '90027',
        image: locationImages.caliImages.griffithPark,
        stamp: locationStamps.blankStamp,
        description: 'Griffith Park Observatory is a renowned landmark located in Los Angeles, California, offering panoramic views of the city skyline and the iconic Hollywood Sign. It serves as both an educational facility and a public observatory, providing visitors with opportunities to explore astronomy through interactive exhibits and telescopes.'
    },
    {
        id: 4,
        name: 'Zion National Park',
        address1: '1 Zion Park Blvd',
        city: 'Springdale',
        state: 'Utah',
        zip: '84767',
        image: locationImages.utahImages.zion,
        stamp: locationStamps.blankStamp,
        description: 'Zion National Park, located in southwestern Utah, is renowned for its dramatic cliffs, deep canyons, and diverse ecosystems. The park features stunning sandstone formations, including the famous Zion Canyon, which visitors can explore via hiking trails like Angel\'s Landing and The Narrows. Zion offers unique opportunities for wildlife viewing, rock climbing, and experiencing breathtaking natural beauty.'
    },
    {
        id: 5,
        name: 'Grand Canyon National Park',
        address1: 'S Entrance Rd',
        city: 'Grand Canyon village',
        state: 'Arizona',
        zip: '86026',
        image: locationImages.azImages.grandCanyon,
        stamp: locationStamps.blankStamp,
        description: 'Grand Canyon National Park in Arizona is one of the world\'s most awe-inspiring natural wonders. Carved by the Colorado River over millions of years, the canyon stretches 277 miles long, up to 18 miles wide, and over a mile deep. Visitors can marvel at its vast and colorful landscape, hike scenic trails, enjoy river rafting, and learn about its rich geological history at the park\'s visitor centers and museums.'
    },
    {
        id: 6,
        name: '',
        address1: '',
        city: '',
        state: '',
        zip: '',
        image: locationImages.azImages.grandCanyon,
        stamp: locationStamps.blankStamp,
        description: 'Description here'
    },
]


/* LIST OF ALL STATES AND CODES */
export const allStates = [
    { state: 'Alabama', code: 'AL' },
    { state: 'Alaska', code: 'AK' },
    { state: 'Arizona', code: 'AZ' },
    { state: 'Arkansas', code: 'AR' },
    { state: 'California', code: 'CA' },
    { state: 'Colorado', code: 'CO' },
    { state: 'Connecticut', code: 'CT' },
    { state: 'Delaware', code: 'DE' },
    { state: 'Florida', code: 'FL' },
    { state: 'Georgia', code: 'GA' },
    { state: 'Hawaii', code: 'HI' },
    { state: 'Idaho', code: 'ID' },
    { state: 'Illinois', code: 'IL' },
    { state: 'Indiana', code: 'IN' },
    { state: 'Iowa', code: 'IA' },
    { state: 'Kansas', code: 'KS' },
    { state: 'Kentucky', code: 'KY' },
    { state: 'Louisiana', code: 'LA' },
    { state: 'Maine', code: 'ME' },
    { state: 'Maryland', code: 'MD' },
    { state: 'Massachusetts', code: 'MA' },
    { state: 'Michigan', code: 'MI' },
    { state: 'Minnesota', code: 'MN' },
    { state: 'Mississippi', code: 'MS' },
    { state: 'Missouri', code: 'MO' },
    { state: 'Montana', code: 'MT' },
    { state: 'Nebraska', code: 'NE' },
    { state: 'Nevada', code: 'NV' },
    { state: 'New Hampshire', code: 'NH' },
    { state: 'New Jersey', code: 'NJ' },
    { state: 'New Mexico', code: 'NM' },
    { state: 'New York', code: 'NY' },
    { state: 'North Carolina', code: 'NC' },
    { state: 'North Dakota', code: 'ND' },
    { state: 'Ohio', code: 'OH' },
    { state: 'Oklahoma', code: 'OK' },
    { state: 'Oregon', code: 'OR' },
    { state: 'Pennsylvania', code: 'PA' },
    { state: 'Rhode Island', code: 'RI' },
    { state: 'South Carolina', code: 'SC' },
    { state: 'South Dakota', code: 'SD' },
    { state: 'Tennessee', code: 'TN' },
    { state: 'Texas', code: 'TX' },
    { state: 'Utah', code: 'UT' },
    { state: 'Vermont', code: 'VT' },
    { state: 'Virginia', code: 'VA' },
    { state: 'Washington', code: 'WA' },
    { state: 'West Virginia', code: 'WV' },
    { state: 'Wisconsin', code: 'WI' },
    { state: 'Wyoming', code: 'WY' }
]