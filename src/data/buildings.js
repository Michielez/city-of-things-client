// In this file the data of the buildings is stored.
// To add a new building, add a new object to the array.
// The name is the name that is displayed on the dashboard.
// The url is just what is showed in the url bar. Make sure its lowercase and has no spaces.

const data = [
    {
        name: "Magdalena Zwembad",
        url: "magdalena-zwembad",
        location: {
            lat: 50.8236,
            lng: 3.2504
        },
        rating: "green",
        usage: "28KWh",
        sustainability: "90%",
    },
    {
        name: "De Penta",
        url: "de-penta",
        location: {
            lat: 50.82405,
            lng: 3.2515
        },
        rating: "orange",
        usage: "30KWh",
        sustainability: "70%",
    },
    {
        name: "KWA.A",
        url: "kwa-a",
        location: null,
        rating: "red",
        usage: "60KWh",
        sustainability: "50%",
    },
    {
        name: "PTI",
        url: "pti",
        location: {
            lat: 50.8255132,
            lng: 3.2481836
        },
        rating: "green",
        usage: "35KWh",
        sustainability: "89%",
    },
    {
        name: "KUBES",
        url: "kubes",
        location: null,
        rating: "orange",
        usage: "40KWh",
        sustainability: "73%",
    },
    {
        name: "VEG-I-TEC",
        url: "veg-i-tec",
        location: {
            lat: 50.8248709,
            lng: 3.2489404
        },
        rating: "red",
        usage: "78KWh",
        sustainability: "30%",
    },
    {
        name: "Lago Zwembad",
        url: "lago-zwembad",
        location: {
            lat: 50.8264364,
            lng: 3.2529717
        },
        rating: "red",
        usage: "100KWh",
        sustainability: "23%",
    },
    {
        name: "Hangar K",
        url: "hangar-k",
        location: {
            lat: 50.8253657,
            lng: 3.2545
        },
        rating: "orange",
        usage: "40KWh",
        sustainability: "58%",
    },
    {
        name: "Flanders Make",
        url: "flanders-make",
        location: {
            lat: 50.8243,
            lng: 3.25295
        },
        rating: "green",
        usage: "40KWh",
        sustainability: "92%",
    }
];

export default data;