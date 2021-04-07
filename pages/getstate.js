var Govee = require("node-govee-led");

var Client = new Govee({
	apiKey: "8a17da1f-c1e9-4a1d-8295-6b1360595bb6",
	mac: "1d:e7:7c:a6:b0:13:b8:e9",
	model: "H6003"
});

function getState() {
    Client.getState().then(state => console.log(state));
}

export default getState