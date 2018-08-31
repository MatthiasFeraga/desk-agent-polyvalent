const config = {
  googleSearchCustomApiKeys: [
    "AIzaSyCb7l9QmqpuY_l6pdPkQlWV0oUWhwJj238",
    "AIzaSyCsiF2Cnc8OxiG4EGKrsKCy2Qv4k5OZI5Y"
  ],
  googleSearchIDs: [
    "014493046936990876322:vavb8pqe6g8",
    "014493046936990876322:mjwmberqfcg"
  ],
  get googleSearchURL() {
    let index = Math.floor(Math.random() * this.googleSearchIDs.length);
    console.log(index);
    let googleSearchCustomApiKey = this.googleSearchCustomApiKeys[index];
    let googleSearchID = this.googleSearchIDs[index];

    return `https://www.googleapis.com/customsearch/v1?key=${googleSearchCustomApiKey}&cx=${googleSearchID}&q=`;
  },
  servicePublicURL: "www.service-public.fr",
  servicePublicURLInfo: {
    info: "F",
    demarche: "R",
    actualite: "A",
    dossier: "N"
  }
};

module.exports = config;
