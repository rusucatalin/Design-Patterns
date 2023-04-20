abstract class armyUnit {
    abstract getArmyPower(): number;
}

class Division extends armyUnit {
    brigades: Brigade[] = [];

    getArmyPower() {
        return this.brigades.reduce((total, brigades) => total + brigades.getArmyPower(), 0);
    }

    addBrigade(brigades: Brigade) {
        this.brigades.push(brigades);
    }
}

class Brigade extends armyUnit {
    platoons: Platoon[] = [];

    getArmyPower() {
        return this.platoons.reduce((total, platoon) => total + platoon.getArmyPower(), 0);
    }

    addPlatoon(platoon: Platoon) {
        this.platoons.push(platoon);
    }
}

class Platoon extends armyUnit {
    teams: Team[] = [];

    getArmyPower() {
        return this.teams.reduce((total, echipa) => total + echipa.getArmyPower(), 0);
    }

    addTeam(team: Team) {
        this.teams.push(team);
    }
}

class Team extends armyUnit {
    armyPower: number;

    constructor(armyPower: number) {
        super();
        this.armyPower = armyPower;
    }

    getArmyPower() {
        return this.armyPower;
    }
}


const division = new Division();
const brigades1 = new Brigade();
const brigades2 = new Brigade();
const platoons1 = new Platoon();
const platoons2 = new Platoon();
const team1 = new Team(10);
const team2 = new Team(20);
const team3 = new Team(30);
const team4 = new Team(40);

platoons1.addTeam(team1);
platoons1.addTeam(team2);
platoons2.addTeam(team3);
platoons2.addTeam(team4);
brigades1.addPlatoon(platoons1);
brigades2.addPlatoon(platoons2);
division.addBrigade(brigades1);
division.addBrigade(brigades2);

console.log(`Total power of division: ${division.getArmyPower()}`);
