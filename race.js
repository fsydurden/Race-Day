let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunners = true;
let runnersAge = 18;
if (runnersAge > 18 && earlyRunners == true){
  raceNumber += 1000;
}
if(runnersAge > 18 && earlyRunners == true){
  console.log(`Register Number ${raceNumber} will run at 9:30 am.`);
}else if(runnersAge < 18 && earlyRunners ==false){
  console.log(`Register Number ${raceNumber} will run at 11:00 am`)
}else if (runnersAge < 18){
  console.log(`Register number ${raceNumber} will run at 12:30 pm`);
}else{
  console.log('People that are under 18 please seek the registration desk!');
}
