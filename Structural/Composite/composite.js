var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var armyUnit = /** @class */ (function () {
    function armyUnit() {
    }
    return armyUnit;
}());
var Division = /** @class */ (function (_super) {
    __extends(Division, _super);
    function Division() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.brigades = [];
        return _this;
    }
    Division.prototype.getArmyPower = function () {
        return this.brigades.reduce(function (total, brigades) { return total + brigades.getArmyPower(); }, 0);
    };
    Division.prototype.addBrigade = function (brigades) {
        this.brigades.push(brigades);
    };
    return Division;
}(armyUnit));
var Brigade = /** @class */ (function (_super) {
    __extends(Brigade, _super);
    function Brigade() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.platoons = [];
        return _this;
    }
    Brigade.prototype.getArmyPower = function () {
        return this.platoons.reduce(function (total, platoon) { return total + platoon.getArmyPower(); }, 0);
    };
    Brigade.prototype.addPlatoon = function (platoon) {
        this.platoons.push(platoon);
    };
    return Brigade;
}(armyUnit));
var Platoon = /** @class */ (function (_super) {
    __extends(Platoon, _super);
    function Platoon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.teams = [];
        return _this;
    }
    Platoon.prototype.getArmyPower = function () {
        return this.teams.reduce(function (total, echipa) { return total + echipa.getArmyPower(); }, 0);
    };
    Platoon.prototype.addTeam = function (team) {
        this.teams.push(team);
    };
    return Platoon;
}(armyUnit));
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team(armyPower) {
        var _this = _super.call(this) || this;
        _this.armyPower = armyPower;
        return _this;
    }
    Team.prototype.getArmyPower = function () {
        return this.armyPower;
    };
    return Team;
}(armyUnit));
var division = new Division();
var brigades1 = new Brigade();
var brigades2 = new Brigade();
var platoons1 = new Platoon();
var platoons2 = new Platoon();
var team1 = new Team(10);
var team2 = new Team(20);
var team3 = new Team(30);
var team4 = new Team(40);
platoons1.addTeam(team1);
platoons1.addTeam(team2);
platoons2.addTeam(team3);
platoons2.addTeam(team4);
brigades1.addPlatoon(platoons1);
brigades2.addPlatoon(platoons2);
division.addBrigade(brigades1);
division.addBrigade(brigades2);
console.log("Total power of division: ".concat(division.getArmyPower()));
