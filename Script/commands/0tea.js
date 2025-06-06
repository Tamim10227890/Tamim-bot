const fs = require("fs");
module.exports.config = {
  name: "tea",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐌𝐝 𝐓𝐚𝐦𝐢𝐦", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("tea")==0 || event.body.indexOf("Tea")==0 || event.body.indexOf("cha dao")==0 || event.body.indexOf("চা")==0) {
    var msg = {
        body: "এই নাও bby চা,, মহারাজ তামিম বানাইছে 🙃😋",
        attachment: fs.createReadStream(__dirname + `/noprefix/tea.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫖", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
