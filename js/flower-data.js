//var bonds = [
//        {
//        	"Name": "Connery",
//        	"Films": 6,
//        	"Kills": 51,
//        	"Average Kills": 8.5,
//        	"Kissed": 18,
//        	"Average Kissed": 3,
//        	"Implicitly Slept With": 9,
//        	"Average Implicitly Slept With": 1.5,
//        	"Explicitly Slept With": 6,
//        	"Average Explicitly Slept With": 1,
//        	"Believed Dead": 4,
//        	"Average Believed Dead": 0.67,
//        	"Bond James Bond": 3,
//        	"Martinis Drunk": 4,
//        	"Rotten Tomato": 86.00
//        },

//        {
//        	"Name": "Lazenby",
//        	"Films": 1,
//        	"Kills": 6,
//        	"Average Kills": 0,
//        	"Kissed": 3,
//        	"Average Kissed": 0,
//        	"Implicitly Slept With": 2,
//        	"Average Implicitly Slept With": 0,
//        	"Explicitly Slept With": 1,
//        	"Average Explicitly Slept With": 0,
//        	"Believed Dead": 1,
//        	"Average Believed Dead": 0,
//        	"Bond James Bond": 2,
//        	"Martinis Drunk": 1,
//        	"Rotten Tomato": 82.00

//        },
//        {
//        	"Name": "Moore",
//        	"Films": 7,
//        	"Kills": 51,
//        	"Average Kills": 7.29,
//        	"Kissed": 20,
//        	"Average Kissed": 2.86,
//        	"Implicitly Slept With": 7,
//        	"Average Implicitly Slept With": 1,
//        	"Explicitly Slept With": 11,
//        	"Average Explicitly Slept With": 1.57,
//        	"Believed Dead": 5,
//        	"Average Believed Dead": 0.71,
//        	"Bond James Bond": 10,
//        	"Martinis Drunk": 3,
//        	"Rotten Tomato": 60.00

//        },
//        {
//        	"Name": "Dalton",
//        	"Films": 2,
//        	"Kills": 11,
//        	"Average Kills": 5.5,
//        	"Kissed": 4,
//        	"Average Kissed": 2,
//        	"Implicitly Slept With": 4,
//        	"Average Implicitly Slept With": 2,
//        	"Explicitly Slept With": 0,
//        	"Average Explicitly Slept With": 0,
//        	"Believed Dead": 0,
//        	"Average Believed Dead": 0,
//        	"Bond James Bond": 2,
//        	"Martinis Drunk": 2,
//        	"Rotten Tomato": 72.00

//        },
//        {
//        	"Name": "Brosnan",
//        	"Films": 4,
//        	"Kills": 76,
//        	"Average Kills": 19,
//        	"Kissed": 12,
//        	"Average Kissed": 3,
//        	"Implicitly Slept With": 3,
//        	"Average Implicitly Slept With": 0.75,
//        	"Explicitly Slept With": 6,
//        	"Average Explicitly Slept With": 1.5,
//        	"Believed Dead": 3,
//        	"Average Believed Dead": 0.75,
//        	"Bond James Bond": 5,
//        	"Martinis Drunk": 4,
//        	"Rotten Tomato": 61.00

//        },
//        {
//        	"Name": "Craig",
//        	"Films": 2,
//        	"Kills": 25,
//        	"Average Kills": 12.5,
//        	"Kissed": 4,
//        	"Average Kissed": 2,
//        	"Implicitly Slept With": 0,
//        	"Average Implicitly Slept With": 0,
//        	"Explicitly Slept With": 2,
//        	"Average Explicitly Slept With": 1,
//        	"Believed Dead": 1,
//        	"Average Believed Dead": 0.5,
//        	"Bond James Bond": 1,
//        	"Martinis Drunk": 1,
//        	"Rotten Tomato": 80.00
//        }
//];

var bonds = [
	{ "Films": 6, "Kills": 51, "Average Kills": 8.5, "Kissed": 18, "Average Kissed": 3, "Implicitly Slept With": 9, "Average Implicit Slept With": 1.5, "Explicitly Slept With": 6, "Average Explicity Slept With": 1, "Slept With": 15, "Average Slept With": 2.5, "Believed Dead": 4, "Average Believed Dead": 0.666666667, "Bond James Bond": 3, "Average Bond James Bond": 0.5, "Martinis Drunk": 4, "Average Martinis Drunk": 0.666666667, "Average Audience Rating": 0.736666667, "Average Rotten Tomatoes Rating": 0.86, "Profitability": 178.775269, "Average Profitability": 29.79587817 },
	{ "Films": 1, "Kills": 6, "Average Kills": 6, "Kissed": 3, "Average Kissed": 3, "Implicitly Slept With": 2, "Average Implicit Slept With": 2, "Explicitly Slept With": 1, "Average Explicity Slept With": 1, "Slept With": 3, "Average Slept With": 3, "Believed Dead": 1, "Average Believed Dead": 0, "Bond James Bond": 2, "Average Bond James Bond": 2, "Martinis Drunk": 1, "Average Martinis Drunk": 1, "Average Audience Rating": 0.62, "Average Rotten Tomatoes Rating": 0.82, "Profitability": 10.24681163, "Average Profitability": 10.24681163 },
	{ "Films": 7, "Kills": 51, "Average Kills": 7.285714286, "Kissed": 20, "Average Kissed": 2.857142857, "Implicitly Slept With": 7, "Average Implicit Slept With": 1, "Explicitly Slept With": 11, "Average Explicity Slept With": 1.571428571, "Slept With": 18, "Average Slept With": 2.571428571, "Believed Dead": 5, "Average Believed Dead": 0.714285714, "Bond James Bond": 10, "Average Bond James Bond": 1.428571429, "Martinis Drunk": 3, "Average Martinis Drunk": 0.428571429, "Average Audience Rating": 0.587142857, "Average Rotten Tomatoes Rating": 0.6, "Profitability": 75.96073396, "Average Profitability": 10.85153342 },
	{ "Films": 2, "Kills": 11, "Average Kills": 5.5, "Kissed": 4, "Average Kissed": 2, "Implicitly Slept With": 4, "Average Implicit Slept With": 2, "Explicitly Slept With": 0, "Average Explicity Slept With": 0, "Slept With": 4, "Average Slept With": 2, "Believed Dead": 0, "Average Believed Dead": 0, "Bond James Bond": 2, "Average Bond James Bond": 1, "Martinis Drunk": 2, "Average Martinis Drunk": 1, "Average Audience Rating": 0.58, "Average Rotten Tomatoes Rating": 0.72, "Profitability": 8.498284687, "Average Profitability": 4.249142343 },
	{ "Films": 4, "Kills": 76, "Average Kills": 19, "Kissed": 12, "Average Kissed": 3, "Implicitly Slept With": 3, "Average Implicit Slept With": 0.75, "Explicitly Slept With": 6, "Average Explicity Slept With": 1.5, "Slept With": 9, "Average Slept With": 2.25, "Believed Dead": 3, "Average Believed Dead": 0.75, "Bond James Bond": 5, "Average Bond James Bond": 1.25, "Martinis Drunk": 4, "Average Martinis Drunk": 1, "Average Audience Rating": 0.6225, "Average Rotten Tomatoes Rating": 0.61, "Profitability": 14.61956402, "Average Profitability": 3.654891006 },
	{ "Films": 2, "Kills": 25, "Average Kills": 12.5, "Kissed": 4, "Average Kissed": 2, "Implicitly Slept With": 0, "Average Implicit Slept With": 0, "Explicitly Slept With": 2, "Average Explicity Slept With": 1, "Slept With": 2, "Average Slept With": 1, "Believed Dead": 1, "Average Believed Dead": 0.5, "Bond James Bond": 1, "Average Bond James Bond": 0.5, "Martinis Drunk": 1, "Average Martinis Drunk": 0.5, "Average Audience Rating": 0.745, "Average Rotten Tomatoes Rating": 0.8, "Profitability": 8.374093748, "Average Profitability": 4.187046874 }
];

var bond_names = ["Connery", "Lazenby", "Moore", "Dalton", "Brosnan", "Craig"];

var properties = ["Films", "Average Kills", "Average Kissed", "Average Slept With", "Average Believed Dead", "Average Bond James Bond", "Average Martinis Drunk", "Average Audience Rating", "Average Rotten Tomatoes Rating", "Average Profitability"];

var property_display_names = ["Films", "Kills", "Girls kissed", "Girls bedded", "Times believed dead", "'Bond. James. Bond.' used", "Martinis Drunk", "Audience rating (%)", "Critics (RT) Rating (%)", "Profitability (x)"];

var properties_colors = [
	"#c8c4b7",
	"#ffd42a",
	"#ff7f2a",
	"#ff5555",
	"#ff80e5",
	"#8787de",
	"#b380ff",
	"#5599ff",
	"#80e5ff",
	"#8dd35f",
	"#abc837"
];

var dark_properties_colors = [
	"#5f4b00",
	"#493a00",
	"#572200",
	"#510000",
	"#440036",
	"#1e1e6c",
	"#220054",
	"#002864",
	"#005f77",
	"#254212",
	"#3c4613"
];

//var normalized_bonds = [
//    {
//    	"Name": "connery",
//    	"Films": 0.8571428571428571,
//    	"Kills": 0.6710526315789473,
//    	"Average Kills": 0.4473684210526316,
//    	"Kissed": 0.9,
//    	"Average Kissed": 1,
//    	"Implicitly Slept With": 1,
//    	"Average Implicitly Slept With": 0.75,
//    	"Explicitly Slept With": 0.5454545454545454,
//    	"Average Explicitly Slept With": 0.6369426751592356,
//    	"Believed Dead": 0.8,
//    	"Average Believed Dead": 0.8933333333333334,
//    	"Bond James Bond": 0.3,
//    	"Martinis Drunk": 1,
//    	"Rotten Tomato": 1
//    },
//    {
//    	"Name": "lazenby",
//    	"Films": 0.14285714285714285,
//    	"Kills": 0.07894736842105263,
//    	"Average Kills": 0,
//    	"Kissed": 0.15,
//    	"Average Kissed": 0,
//    	"Implicitly Slept With": 0.2222222222222222,
//    	"Average Implicitly Slept With": 0,
//    	"Explicitly Slept With": 0.09090909090909091,
//    	"Average Explicitly Slept With": 0,
//    	"Believed Dead": 0.2,
//    	"Average Believed Dead": 0,
//    	"Bond James Bond": 0.2,
//    	"Martinis Drunk": 0.25,
//    	"Rotten Tomato": 0.9534883720930233
//    },
//    {
//    	"Name": "moore",
//    	"Films": 1,
//    	"Kills": 0.6710526315789473,
//    	"Average Kills": 0.3836842105263158,
//    	"Kissed": 1,
//    	"Average Kissed": 0.9533333333333333,
//    	"Implicitly Slept With": 0.7777777777777778,
//    	"Average Implicitly Slept With": 0.5,
//    	"Explicitly Slept With": 1,
//    	"Average Explicitly Slept With": 1,
//    	"Believed Dead": 1,
//    	"Average Believed Dead": 0.9466666666666667,
//    	"Bond James Bond": 1,
//    	"Martinis Drunk": 0.75,
//    	"Rotten Tomato": 0.6976744186046512
//    },
//    {
//    	"Name": "dalton",
//    	"Films": 0.2857142857142857,
//    	"Kills": 0.14473684210526316,
//    	"Average Kills": 0.2894736842105263,
//    	"Kissed": 0.2,
//    	"Average Kissed": 0.6666666666666666,
//    	"Implicitly Slept With": 0.4444444444444444,
//    	"Average Implicitly Slept With": 1,
//    	"Explicitly Slept With": 0,
//    	"Average Explicitly Slept With": 0,
//    	"Believed Dead": 0,
//    	"Average Believed Dead": 0,
//    	"Bond James Bond": 0.2,
//    	"Martinis Drunk": 0.5,
//    	"Rotten Tomato": 0.8372093023255814
//    },
//    {
//    	"Name": "brosnan",
//    	"Films": 0.5714285714285714,
//    	"Kills": 1,
//    	"Average Kills": 1,
//    	"Kissed": 0.6,
//    	"Average Kissed": 1,
//    	"Implicitly Slept With": 0.3333333333333333,
//    	"Average Implicitly Slept With": 0.375,
//    	"Explicitly Slept With": 0.5454545454545454,
//    	"Average Explicitly Slept With": 0.9554140127388535,
//    	"Believed Dead": 0.6,
//    	"Average Believed Dead": 1,
//    	"Bond James Bond": 0.5,
//    	"Martinis Drunk": 1,
//    	"Rotten Tomato": 0.7093023255813954
//    },
//    {
//    	"Name": "craig",
//    	"Films": 0.2857142857142857,
//    	"Kills": 0.32894736842105265,
//    	"Average Kills": 0.6578947368421053,
//    	"Kissed": 0.2,
//    	"Average Kissed": 0.6666666666666666,
//    	"Implicitly Slept With": 0,
//    	"Average Implicitly Slept With": 0,
//    	"Explicitly Slept With": 0.18181818181818182,
//    	"Average Explicitly Slept With": 0.6369426751592356,
//    	"Believed Dead": 0.2,
//    	"Average Believed Dead": 0.6666666666666666,
//    	"Bond James Bond": 0.1,
//    	"Martinis Drunk": 0.25,
//    	"Rotten Tomato": 0.9302325581395349
//    }
//];

var normalized_bonds = [{ "Films": 0.857142857, "Kills": 0.671052632, "Average Kills": 0.447368421, "Kissed": 0.9, "Average Kissed": 1, "Implicitly Slept With": 1, "Average Implicit Slept With": 0.75, "Explicitly Slept With": 0.545454545, "Average Explicity Slept With": 0.636363636, "Slept With": 0.833333333, "Average Slept With": 0.833333333, "Believed Dead": 0.8, "Average Believed Dead": 0.888888889, "Bond James Bond": 0.3, "Average Bond James Bond": 0.25, "Martinis Drunk": 1, "Average Martinis Drunk": 0.666666667, "Average Audience Rating": 0.988814318, "Average Rotten Tomatoes Rating": 1, "Profitability": 1, "Average Profitability": 1 },
{ "Films": 0.142857143, "Kills": 0.078947368, "Average Kills": 0.315789474, "Kissed": 0.15, "Average Kissed": 1.00, "Implicitly Slept With": 0.222222222, "Average Implicit Slept With": 1, "Explicitly Slept With": 0.090909091, "Average Explicity Slept With": 0.636363636, "Slept With": 0.166666667, "Average Slept With": 1, "Believed Dead": 0.2, "Average Believed Dead": 0, "Bond James Bond": 0.2, "Average Bond James Bond": 1, "Martinis Drunk": 0.25, "Average Martinis Drunk": 1, "Average Audience Rating": 0.832214765, "Average Rotten Tomatoes Rating": 0.953488372, "Profitability": 0.057316718, "Average Profitability": 0.343900306 },
{ "Films": 1, "Kills": 0.671052632, "Average Kills": 0.383458647, "Kissed": 1, "Average Kissed": 0.952380952, "Implicitly Slept With": 0.777777778, "Average Implicit Slept With": 0.5, "Explicitly Slept With": 1, "Average Explicity Slept With": 1, "Slept With": 1, "Average Slept With": 0.857142857, "Believed Dead": 1, "Average Believed Dead": 0.952380952, "Bond James Bond": 1, "Average Bond James Bond": 0.714285714, "Martinis Drunk": 0.75, "Average Martinis Drunk": 0.428571429, "Average Audience Rating": 0.788111218, "Average Rotten Tomatoes Rating": 0.697674419, "Profitability": 0.42489509, "Average Profitability": 0.364195791 },
{ "Films": 0.285714286, "Kills": 0.144736842, "Average Kills": 0.289473684, "Kissed": 0.2, "Average Kissed": 0.67, "Implicitly Slept With": 0.444444444, "Average Implicit Slept With": 1, "Explicitly Slept With": 0, "Average Explicity Slept With": 0, "Slept With": 0.222222222, "Average Slept With": 0.666666667, "Believed Dead": 0, "Average Believed Dead": 0, "Bond James Bond": 0.2, "Average Bond James Bond": 0.5, "Martinis Drunk": 0.5, "Average Martinis Drunk": 1, "Average Audience Rating": 0.77852349, "Average Rotten Tomatoes Rating": 0.837209302, "Profitability": 0.047536131, "Average Profitability": 0.142608394 },
{ "Films": 0.571428571, "Kills": 1, "Average Kills": 1, "Kissed": 0.6, "Average Kissed": 1, "Implicitly Slept With": 0.333333333, "Average Implicit Slept With": 0.375, "Explicitly Slept With": 0.545454545, "Average Explicity Slept With": 0.954545455, "Slept With": 0.5, "Average Slept With": 0.75, "Believed Dead": 0.6, "Average Believed Dead": 1, "Bond James Bond": 0.5, "Average Bond James Bond": 0.625, "Martinis Drunk": 1, "Average Martinis Drunk": 1, "Average Audience Rating": 0.83557047, "Average Rotten Tomatoes Rating": 0.709302326, "Profitability": 0.08177621, "Average Profitability": 0.122664316 },
{ "Films": 0.285714286, "Kills": 0.328947368, "Average Kills": 0.657894737, "Kissed": 0.2, "Average Kissed": 0.666666667, "Implicitly Slept With": 0, "Average Implicit Slept With": 0, "Explicitly Slept With": 0.181818182, "Average Explicity Slept With": 0.636363636, "Slept With": 0.111111111, "Average Slept With": 0.333333333, "Believed Dead": 0.2, "Average Believed Dead": 0.666666667, "Bond James Bond": 0.1, "Average Bond James Bond": 0.25, "Martinis Drunk": 0.25, "Average Martinis Drunk": 0.5, "Average Audience Rating": 1, "Average Rotten Tomatoes Rating": 0.930232558, "Profitability": 0.046841455, "Average Profitability": 0.140524366 }];

var min_Property_Values = {"Films":1,"Kills":6,"Average Kills":5.5,"Kissed":3,"Average Kissed":2,"Implicitly Slept With":0,"Average Implicitly Slept With":0,"Explicitly Slept With":0,"Average Explicitly Slept With":0,"Believed Dead":0,"Average Believed Dead":0,"Bond James Bond":1,"Martinis Drunk":1,"Rotten Tomato":60,"Average Implicit Slept With":0,"Average Explicity Slept With":0,"Slept With":2,"Average Slept With":1,"Average Bond James Bond":0.5,"Average Martinis Drunk":0.428571429,"Average Audience Rating":0.58,"Average Rotten Tomatoes Rating":0.6,"Profitability":8.374093748,"Average Profitability":3.654891006};

var normalized_Min_Property_Values = {"Films":0.142857143,"Kills":0.078947368,"Average Kills":0.289473684,"Kissed":0.15,"Average Kissed":0.666666667,"Implicitly Slept With":0,"Average Implicitly Slept With":0,"Explicitly Slept With":0,"Average Explicitly Slept With":0,"Believed Dead":0,"Average Believed Dead":0,"Bond James Bond":0.1,"Martinis Drunk":0.25,"Rotten Tomato":0.6976744186046512,"Average Implicit Slept With":0,"Average Explicity Slept With":0,"Slept With":0.111111111,"Average Slept With":0.333333333,"Average Bond James Bond":0.25,"Average Martinis Drunk":0.428571429,"Average Audience Rating":0.77852349,"Average Rotten Tomatoes Rating":0.697674419,"Profitability":0.046841455,"Average Profitability":0.122664316};

var max_Property_Values = {"Films":7,"Kills":76,"Average Kills":19,"Kissed":20,"Average Kissed":3,"Implicitly Slept With":9,"Average Implicitly Slept With":2,"Explicitly Slept With":11,"Average Explicitly Slept With":1.57,"Believed Dead":5,"Average Believed Dead":0.75,"Bond James Bond":10,"Martinis Drunk":4,"Rotten Tomato":86,"Average Implicit Slept With":2,"Average Explicity Slept With":1.571428571,"Slept With":18,"Average Slept With":3,"Average Bond James Bond":2,"Average Martinis Drunk":1,"Average Audience Rating":0.745,"Average Rotten Tomatoes Rating":0.86,"Profitability":178.775269,"Average Profitability":29.79587817};

var normalized_Max_Property_Values = {"Films":1,"Kills":1,"Average Kills":1,"Kissed":1,"Average Kissed":1,"Implicitly Slept With":1,"Average Implicitly Slept With":1,"Explicitly Slept With":1,"Average Explicitly Slept With":1,"Believed Dead":1,"Average Believed Dead":1,"Bond James Bond":1,"Martinis Drunk":1,"Rotten Tomato":1,"Average Implicit Slept With":1,"Average Explicity Slept With":1,"Slept With":1,"Average Slept With":1,"Average Bond James Bond":1,"Average Martinis Drunk":1,"Average Audience Rating":1,"Average Rotten Tomatoes Rating":1,"Profitability":1,"Average Profitability":1};

var average_Property_Values = {"Films":2.6666666666666665,"Kills":28.166666666666668,"Average Kills":8.380952381,"Kissed":7.166666666666667,"Average Kissed":2.1428571428333334,"Implicitly Slept With":2.6666666666666665,"Average Implicitly Slept With":0.26785714285714285,"Explicitly Slept With":3.3333333333333335,"Average Explicitly Slept With":0.29071428571428576,"Believed Dead":1.6666666666666667,"Average Believed Dead":0.3273809523333333,"Bond James Bond":3.3333333333333335,"Martinis Drunk":1.8333333333333333,"Rotten Tomato":25.357142857142858,"Average Implicit Slept With":0.9583333333333334,"Average Explicity Slept With":0.8452380951666667,"Slept With":6,"Average Slept With":1.8035714285,"Average Bond James Bond":1.0297619048333333,"Average Martinis Drunk":0.6547619048333333,"Average Audience Rating":0.5257738095000001,"Average Rotten Tomatoes Rating":0.5916666666666667,"Profitability":19.61658134083333,"Average Profitability":5.531570878833333};

var normalized_Average_Property_Values = {"Films":0.380952381,"Kills":0.370614035,"Average Kills":0.44110275699999996,"Kissed":0.35833333333333334,"Average Kissed":0.7148412698333333,"Implicitly Slept With":0.29629629616666664,"Average Implicitly Slept With":0.13392857142857142,"Explicitly Slept With":0.303030303,"Average Explicitly Slept With":0.18516833484986353,"Believed Dead":0.3333333333333333,"Average Believed Dead":0.43650793649999997,"Bond James Bond":0.3333333333333333,"Martinis Drunk":0.4583333333333333,"Rotten Tomato":0.29485049833887045,"Average Implicit Slept With":0.4791666666666667,"Average Explicity Slept With":0.5378787878333333,"Slept With":0.3333333333333333,"Average Slept With":0.6011904761666667,"Average Bond James Bond":0.5148809523333333,"Average Martinis Drunk":0.6547619048333333,"Average Audience Rating":0.7057366571666667,"Average Rotten Tomatoes Rating":0.6879844961666666,"Profitability":0.10972760066666666,"Average Profitability":0.18564886216666665};

var min_Property_Bond_Names = {"Films":["Lazenby"],"Kills":["Lazenby"],"Average Kills":["Dalton"],"Kissed":["Lazenby"],"Average Kissed":["Dalton","Craig"],"Implicitly Slept With":["Craig"],"Average Implicitly Slept With":["Lazenby","Craig"],"Explicitly Slept With":["Dalton"],"Average Explicitly Slept With":["Lazenby","Dalton"],"Believed Dead":["Dalton"],"Average Believed Dead":["Lazenby","Dalton"],"Bond James Bond":["Craig"],"Martinis Drunk":["Lazenby","Craig"],"Rotten Tomato":[],"Average Implicit Slept With":["Craig"],"Average Explicity Slept With":["Dalton"],"Slept With":["Craig"],"Average Slept With":["Craig"],"Average Bond James Bond":["Connery","Craig"],"Average Martinis Drunk":["Moore"],"Average Audience Rating":["Dalton"],"Average Rotten Tomatoes Rating":["Moore"],"Profitability":["Craig"],"Average Profitability":["Brosnan"]};

var max_Property_Bond_Names = {"Films":["Moore"],"Kills":["Brosnan"],"Average Kills":["Brosnan"],"Kissed":["Moore"],"Average Implicitly Slept With":[],"Explicitly Slept":[],"Average Explicitly Slept":[],"Believed Dead":["Moore"],"Average Believed Dead":["Brosnan"],"Bond James Bond":["Moore"],"Average Kissed":["Connery","Lazenby","Brosnan"],"Implicitly Slept":[],"Martinis Drunk":["Connery","Brosnan"],"Rotten Tomato":[],"Implicitly Slept With":["Connery"],"Average Implicit Slept With":["Lazenby","Dalton"],"Explicitly Slept With":["Moore"],"Average Explicity Slept With":["Moore"],"Slept":[],"Average Slept With":["Lazenby"],"Average Bond James Bond":["Lazenby"],"Average Martinis Drunk":["Lazenby","Dalton","Brosnan"],"Average Audience Rating":["Craig"],"Average Rotten Tomatoes Rating":["Connery"],"Profitability":["Connery"],"Average Profitability":["Connery"],"Slept With":["Moore"]};

//var cproperty_names = ["Films", "Kills", "Average Kills", "Kissed", "Average Kissed", "Implicitly Slept With", "Average Implicit Slept With", "Explicitly Slept With", "Average Explicity Slept With", "Slept With", "Average Slept With", "Believed Dead", "Average Believed Dead", "Bond James Bond", "Average Bond James Bond", "Martinis Drunk", "Average Martinis Drunk", "Average Audience Rating", "Average Rotten Tomatoes Rating", "Profitability", "Average Profitability"];

//for (var i = 0; i < cproperty_names.length; i++) {
//	min_Property_Values[cproperty_names[i]] = max_Property_Values[cproperty_names[i]] = bonds[0][cproperty_names[i]];
//	normalized_Min_Property_Values[cproperty_names[i]] = normalized_Max_Property_Values[cproperty_names[i]] = normalized_bonds[0][cproperty_names[i]];
//	average_Property_Values[cproperty_names[i]] = normalized_Average_Property_Values[cproperty_names[i]] = 0.0;
//	for (var j = 1; j < bonds.length; j++) {
//		if (min_Property_Values[cproperty_names[i]] > bonds[j][cproperty_names[i]]) {
//			min_Property_Values[cproperty_names[i]] = bonds[j][cproperty_names[i]];
//		}
//		if (max_Property_Values[cproperty_names[i]] < bonds[j][cproperty_names[i]]) {
//			max_Property_Values[cproperty_names[i]] = bonds[j][cproperty_names[i]];
//		}

//		if (normalized_Min_Property_Values[cproperty_names[i]] > normalized_bonds[j][cproperty_names[i]]) {
//			normalized_Min_Property_Values[cproperty_names[i]] = normalized_bonds[j][cproperty_names[i]];
//		}
//		if (normalized_Max_Property_Values[cproperty_names[i]] < normalized_bonds[j][cproperty_names[i]]) {
//			normalized_Max_Property_Values[cproperty_names[i]] = normalized_bonds[j][cproperty_names[i]];
//		}

//		average_Property_Values[cproperty_names[i]] = average_Property_Values[cproperty_names[i]] + bonds[j][cproperty_names[i]];
//		normalized_Average_Property_Values[cproperty_names[i]] = normalized_Average_Property_Values[cproperty_names[i]] + normalized_bonds[j][cproperty_names[i]];
//	}

//	average_Property_Values[cproperty_names[i]] = average_Property_Values[cproperty_names[i]] / bond_names.length;
//	normalized_Average_Property_Values[cproperty_names[i]] = normalized_Average_Property_Values[cproperty_names[i]] / bond_names.length;
//}

//for (var i = 0; i < cproperty_names.length; i++) {
//	min_Property_Bond_Names[cproperty_names[i]] = [];
//	max_Property_Bond_Names[cproperty_names[i]] = [];
//	for (var j = 0; j < bonds.length; j++) {
//		if (min_Property_Values[cproperty_names[i]] == bonds[j][cproperty_names[i]]) {
//			min_Property_Bond_Names[cproperty_names[i]].push(bond_names[j]);
//		}
//		if (max_Property_Values[cproperty_names[i]] == bonds[j][cproperty_names[i]]) {
//			max_Property_Bond_Names[cproperty_names[i]].push(bond_names[j]);
//		}
//	}
//}

//console.log("var min_Property_Values = " + JSON.stringify(min_Property_Values) + ";\n");
//console.log("var normalized_Min_Property_Values = " + JSON.stringify(normalized_Min_Property_Values) + ";\n");
//console.log("var max_Property_Values = " + JSON.stringify(max_Property_Values) + ";\n");
//console.log("var normalized_Max_Property_Values = " + JSON.stringify(normalized_Max_Property_Values) + ";\n");
//console.log("var average_Property_Values = " + JSON.stringify(average_Property_Values) + ";\n");
//console.log("var normalized_Average_Property_Values = " + JSON.stringify(normalized_Average_Property_Values) + ";\n");
//console.log("var min_Property_Bond_Names = " + JSON.stringify(min_Property_Bond_Names) + ";\n");
//console.log("var max_Property_Bond_Names = " + JSON.stringify(max_Property_Bond_Names) + ";\n");
