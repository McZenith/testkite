const { Engine } = require("velocity");

const velocityDataPrivate = require("./velocity.private.data.json");
const velocityDataProd = require("./velocity.data.prod.json");
const velocityDataDev = require("./velocity.data.json");

let velocityData;

if (process.env.NODE_ENV === "Production") {
  velocityData = velocityDataProd;
} else {
  velocityData = velocityDataDev;
}
const engine = new Engine({ template: "./statics/index.vm" || "./src/index.vm" });

module.exports = data => {
  return engine.render({
    ...velocityData,
    ...velocityDataPrivate,
    ...data
  });
};
