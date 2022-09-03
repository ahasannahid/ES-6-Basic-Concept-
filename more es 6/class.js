// for es6 class is syntactic sugar

class Instructor{
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    // class er vitor value set korte constructor class use kora hoy. and ei clss ei je set korbe bujate this use hoy. eti call er jonne class call korte somoy parameter diye dilei hoy.
    constructor(name, location){
        this.name = name;
        this.location = location;

    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`pleae create quiz for module ${module}`)
    }
}

const amir = new Instructor('nahid', 'dhaka');
console.log(amir);
// class er vitor function ke method bole
amir.startSupportSession('9.00');
amir.createQuiz(60);

const ahasan = new Instructor('ahasan', 'mymensingh');
console.log(ahasan);