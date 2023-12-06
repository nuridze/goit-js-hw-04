const profile = {
  player: { username: "Jacob", playTime: 300 },

  changeUsername(newName) {
    this.player.username = newName;
  },
  updatePlayTime(hours) {
    this.player.playTime += hours;
  },
  getInfo() {
    return `${this.player.username} has ${this.player.playTime} active hours!`;
  },
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"