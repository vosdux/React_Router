const PlayerAPI = {
    players: [
      { number: 1, name: "Ben Blocker", position: "Goalie" },
      { number: 2, name: "Dave Defender", position: "Def" },
      { number: 3, name: "Sam Sweeper", position: "Def" },
      { number: 4, name: "Matt Midfielder", position: "Midf" },
      { number: 5, name: "William Winger", position: "Midf" },
      { number: 6, name: "Fillipe Forward", position: "Forward" }
    ],
    all: function() { return this.players},
    get: function(id) {
      const isPlayer = p => p.number === id
      return this.players.find(isPlayer)
    }
  }

export default PlayerAPI;