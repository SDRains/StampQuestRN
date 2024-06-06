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
    }
]
export const travelList = [
    {
        locationID: 3
    },
    {
        locationID: 1
    }
]
export const popularStories = [
    {
        image: locationImages.azImages.sedona,
        title: "The Wonders of the Sonoran Desert",
        link: '',
        availableStamps: 8
    },
    {
        image: locationImages.caliImages.californiaCoast,
        title: "PCH 1 - A Drivers Dream",
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
        description: 'Description here'
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
        description: 'Description here'
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
        description: 'Description here'
    },
]