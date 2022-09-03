class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for you feedback`);
    }
}
class Instructor extends TeamMember{
    designation = 'web course Instructor'
    team = 'web team'
    // class er vitor value set korte constructor class use kora hoy. and ei clss ei je set korbe bujate this use hoy. eti call er jonne class call korte somoy parameter diye dilei hoy.
    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`pleae create quiz for module ${module}`)
    }
}
class Developer extends TeamMember{
    designation = 'web course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(featurs){
        console.log(`please develop the features ${featurs}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}
class JobPlacement extends TeamMember{
    designation = 'Job Placements Commando'
    team = 'Job Placement'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(featurs){
        console.log(`please develop the features ${featurs}`)
    }
    prepare(version){
        console.log(`please release the version ${version}`)
    }
}

const alia = new Developer("Alia Bhat", 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const nahid = new Instructor('Ahasan', 'Mirpur')
console.log(nahid);
nahid.createQuiz(30);