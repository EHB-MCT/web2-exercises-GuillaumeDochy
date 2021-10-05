'use strict';

class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.trainer = 'ash';
        this.roster = [];
    }

    describe() {
        return `${this.teamName} with trainer ${this.trainer} has these pokemon: ${[...this.roster]}`;
    }
}

export default Team;