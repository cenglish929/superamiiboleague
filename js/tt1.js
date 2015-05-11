var marktt1 = {
		damage : [719, 864, 432],
		wins : 2,
		battles : 3,
		hit : [30, 37, 21],
		time : [300, 300, 300],
		ko : [2, 4, 1],
		deaths : [1, 1, 2]
	};

var pikapoott1 = {
		damage : [485],
		wins : 0,
		battles : 1,
		hit : [27],
		time : [300],
		ko : [1],
		deaths : [2]
	};

var peachiett1 = {
		damage : [1146, 683],
		wins : 1,
		battles : 2,
		hit : [36, 25],
		time : [300, 300],
		ko : [5, 1],
		deaths : [2, 4]
	};

var donkeybaett1 = {
		damage : [510],
		wins : 0,
		battles : 1,
		hit : [14],
		time : [300],
		ko : [2],
		deaths : [5]
	};

var eggtt1 = {
		damage : [486],
		wins : 0,
		battles : 1,
		hit : [18],
		time : [300],
		ko : [1],
		deaths : [2]
	};

var pdiddytt1 = {
		damage : [476, 377],
		wins : 1,
		battles : 2,
		hit : [19, 18],
		time : [300, 300],
		ko : [2, 1],
		deaths : [1, 1]
	};

var ithtt1 = {
		damage : [314],
		wins : 0,
		battles : 1,
		hit : [17],
		time : [300],
		ko : [1],
		deaths : [2]
	};

var satantt1 = {
		damage : [589, 416, 521],
		wins : 3,
		battles : 3,
		hit : [31, 28, 35],
		time : [300, 300, 300],
		ko : [2, 1, 2],
		deaths : [1, 1, 1]
	};



				/*      MARK STATS   TT1  */
//Total Damage
var markdmgtt1 = marktt1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var markAvgDmgtt1 = markdmgtt1 / marktt1.damage.length;

//Highest Damage
var markHighDmgtt1 = Math.max.apply(Math, marktt1.damage);

//Total Kills
var markKott1 = marktt1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var markDeathtt1 = marktt1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var markKDtt1 = markKott1 / markDeathtt1;

//Average Hit Percentage
var markHittt1 = marktt1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var markAvgHittt1 = markHittt1 / marktt1.hit.length;



			/*      PIKAPOO STATS   TT1  */
//Total Damage
var pikapoodmgtt1 = pikapoott1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var pikapooAvgDmgtt1 = pikapoodmgtt1 / pikapoott1.damage.length;

//Highest Damage
var pikapooHighDmgtt1 = Math.max.apply(Math, pikapoott1.damage);

//Total Kills
var pikapooKott1 = pikapoott1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var pikapooDeathtt1 = pikapoott1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var pikapooKDtt1 = pikapooKott1 / pikapooDeathtt1;

//Average Hit Percentage
var pikapooHittt1 = pikapoott1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var pikapooAvgHittt1 = pikapooHittt1 / pikapoott1.hit.length;



				/*      PEACHIE STATS   TT1  */
//Total Damage
var peachiedmgtt1 = peachiett1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var peachieAvgDmgtt1 = peachiedmgtt1 / peachiett1.damage.length;

//Highest Damage
var peachieHighDmgtt1 = Math.max.apply(Math, peachiett1.damage);

//Total Kills
var peachieKott1 = peachiett1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var peachieDeathtt1 = peachiett1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var peachieKDtt1 = peachieKott1 / peachieDeathtt1;

//Average Hit Percentage
var peachieHittt1 = peachiett1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var peachieAvgHittt1 = peachieHittt1 / peachiett1.hit.length;



			/*      DONKEY BAE STATS   TT1  */
//Total Damage
var donkeybaedmgtt1 = donkeybaett1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var donkeybaeAvgDmgtt1 = donkeybaedmgtt1 / donkeybaett1.damage.length;

//Highest Damage
var donkeybaeHighDmgtt1 = Math.max.apply(Math, donkeybaett1.damage);

//Total Kills
var donkeybaeKott1 = donkeybaett1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var donkeybaeDeathtt1 = donkeybaett1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var donkeybaeKDtt1 = donkeybaeKott1 / donkeybaeDeathtt1;

//Average Hit Percentage
var donkeybaeHittt1 = donkeybaett1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var donkeybaeAvgHittt1 = donkeybaeHittt1 / donkeybaett1.hit.length;



				/*      EGG STATS   TT1  */
//Total Damage
var eggdmgtt1 = eggtt1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var eggAvgDmgtt1 = eggdmgtt1 / eggtt1.damage.length;

//Highest Damage
var eggHighDmgtt1 = Math.max.apply(Math, eggtt1.damage);

//Total Kills
var eggKott1 = eggtt1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var eggDeathtt1 = eggtt1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var eggKDtt1 = eggKott1 / eggDeathtt1;

//Average Hit Percentage
var eggHittt1 = eggtt1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var eggAvgHittt1 = eggHittt1 / eggtt1.hit.length;



				/*      P DIDDY STATS   TT1  */
//Total Damage
var pdiddydmgtt1 = pdiddytt1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var pdiddyAvgDmgtt1 = pdiddydmgtt1 / pdiddytt1.damage.length;

//Highest Damage
var pdiddyHighDmgtt1 = Math.max.apply(Math, pdiddytt1.damage);

//Total Kills
var pdiddyKott1 = pdiddytt1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var pdiddyDeathtt1 = pdiddytt1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var pdiddyKDtt1 = pdiddyKott1 / pdiddyDeathtt1;

//Average Hit Percentage
var pdiddyHittt1 = pdiddytt1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var pdiddyAvgHittt1 = pdiddyHittt1 / pdiddytt1.hit.length;



				/*      ITH STATS   TT1  */
//Total Damage
var ithdmgtt1 = ithtt1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var ithAvgDmgtt1 = ithdmgtt1 / ithtt1.damage.length;

//Highest Damage
var ithHighDmgtt1 = Math.max.apply(Math, ithtt1.damage);

//Total Kills
var ithKott1 = ithtt1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var ithDeathtt1 = ithtt1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var ithKDtt1 = ithKott1 / ithDeathtt1;

//Average Hit Percentage
var ithHittt1 = ithtt1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var ithAvgHittt1 = ithHittt1 / ithtt1.hit.length;



				/*      SATAN STATS   TT1  */
//Total Damage
var satandmgtt1 = satantt1.damage.reduce(function(a, b, c) {
	return a + b + c;
})

//Average Damage
var satanAvgDmgtt1 = satandmgtt1 / marktt1.damage.length;

//Highest Damage
var satanHighDmgtt1 = Math.max.apply(Math, satantt1.damage);

//Total Kills
var satanKott1 = satantt1.ko.reduce(function(a, b, c) {
	return a + b + c;
})

//Total Deaths
var satanDeathtt1 = satantt1.deaths.reduce(function(a, b, c) {
	return a + b + c;
})

//KD
var satanKDtt1 = satanKott1 / satanDeathtt1;

//Average Hit Percentage
var satanHittt1 = satantt1.hit.reduce(function(a, b, c) {
	return a + b + c;
})
var satanAvgHittt1 = satanHittt1 / satantt1.hit.length;



//Mark
$("#markkd").append(markKDtt1);
$("#markhdam").append(markHighDmgtt1);
$("#markavgdam").append(markAvgDmgtt1);
$("#markavghit").append(markAvgHittt1);

//Satan
$("#satankd").append(satanKDtt1);
$("#satanhdam").append(satanHighDmgtt1);
$("#satanavgdam").append(satanAvgDmgtt1);
$("#satanavghit").append(satanAvgHittt1);

//Peachie
$("#peachiekd").append(peachieKDtt1);
$("#peachiehdam").append(peachieHighDmgtt1);
$("#peachieavgdam").append(peachieAvgDmgtt1);
$("#peachieavghit").append(peachieAvgHittt1);

//P diddy
$("#pdiddykd").append(pdiddyKDtt1);
$("#pdiddyhdam").append(pdiddyHighDmgtt1);
$("#pdiddyavgdam").append(pdiddyAvgDmgtt1);
$("#pdiddyavghit").append(pdiddyAvgHittt1);

//Egg
$("#eggkd").append(eggKDtt1);
$("#egghdam").append(eggHighDmgtt1);
$("#eggavgdam").append(eggAvgDmgtt1);
$("#eggavghit").append(eggAvgHittt1);

//Ith
$("#ithkd").append(ithKDtt1);
$("#ithhdam").append(ithHighDmgtt1);
$("#ithavgdam").append(ithAvgDmgtt1);
$("#ithavghit").append(ithAvgHittt1);

//Donkey Bae
$("#dkkd").append(donkeybaeKDtt1);
$("#dkhdam").append(donkeybaeHighDmgtt1);
$("#dkavgdam").append(donkeybaeAvgDmgtt1);
$("#dkavghit").append(donkeybaeAvgHittt1);



