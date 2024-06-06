// State Base Roots
const AzRoot = "@/assets/locations/Arizona/"
const caliRoot = "@/assets/locations/California/"
const utahRoot = "@/assets/locations/Utah/"

// Arizona Images
const grandCanyon = require(AzRoot + "grand_canyon.png")
const sedona = require(AzRoot + "sedona_cropped.png")

// California Images
const californiaCoast = require(caliRoot + "california_coast.png")
const goldenGateBridge = require(caliRoot + "golden_gate_bridge.png")
const griffithPark = require(caliRoot + "griffith_park.png")
const redwoodNP = require(caliRoot + "redwood_national_park.png")
const santaMonicaPier = require(caliRoot + "santa_monica_pier.png")
const sequoiaNP = require(caliRoot + "sequoia_national_park.png")
const yosemiteNationalPark = require(caliRoot + "yosemite_national_park.png")

// Utah Images
const canyonlands = require(utahRoot + "canyonlands.png")
const zion = require(utahRoot + "zion.png")

export default {
    azImages: {
        grandCanyon,
        sedona
    },
    caliImages: {
        californiaCoast,
        goldenGateBridge,
        griffithPark,
        redwoodNP,
        santaMonicaPier,
        sequoiaNP,
        yosemiteNationalPark
    },
    utahImages: {
        canyonlands,
        zion
    }
}