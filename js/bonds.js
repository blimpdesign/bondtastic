/*var bonds = [
        
        {
            "name": "connery",
            "films": 6,
            "kills": 51,
            "average_kills":8.5,
            "kissed":18,
            "average_kissed":3,
            "iSlept":	9,
            "average_implicitly_slept":1.5,
            "eSlept":6,
            "average explicitly_slept": 1,
            "Slept With": 0.833333333, "Average_Slept_With": 0.833333333,
            "believed_dead":4,
            "average_believed_dead":0.67,
            "bond_james_bond":3,
            "martinis_drunk":4,
            "rotten_tomato":86.00
        },

        {
            "name": "lazenby",
            "films": 1,
            "kills": 6,
            "average_kills":0,
            "kissed": 3,
            "average_kissed": 0,
            "iSlept":2,
            "average_implicitly_slept": 0,
            "eSlept": 1,
            "average explicitly_slept": 0,
            "Slept With": 0.166666667, "Average_Slept_With": 1,
            "believed_dead": 1,
            "average_believed_dead": 0,
            "bond_james_bond": 2,
            "martinis_drunk": 1,
            "rotten_tomato": 82.00

        },
        {
            "name": "moore",
            "films":7,
            "kills":51,
            "average_kills":7.29,
            "kissed":20,
            "average_kissed":2.86,
            "iSlept":7,
            "average_implicitly_slept":1,
            "eSlept":11,
            "average explicitly_slept": 1.57,
            "Slept With": 1, "Average_Slept_With": 0.857142857,
            "believed_dead":5,
            "average_believed_dead":0.71,
            "bond_james_bond":10,
            "martinis_drunk": 3,
            "rotten_tomato": 60.00

        },
        {
            "name": "dalton",
            "films": 2,
            "kills": 11,
            "average_kills":5.5,
            "kissed": 4,
            "average_kissed": 2,
            "iSlept": 4,
            "average_implicitly_slept":2,
            "eSlept":0,
            "average explicitly_slept": 0,
            "Slept With": 0.222222222, "Average_Slept_With": 0.666666667,
            "believed_dead": 0,
            "average_believed_dead": 0,
            "bond_james_bond":2,
            "martinis_drunk": 2,
            "rotten_tomato": 72.00

        },
        {
            "name": "brosnan",
            "films":4,
            "kills": 76,
            "average_kills":19,
            "kissed":12,
            "average_kissed":3,
            "iSlept":3,
            "average_implicitly_slept":0.75,
            "eSlept":6,
            "average explicitly_slept":1.5,
            "believed_dead":3,
            "average_believed_dead":0.75,
            "bond_james_bond": 5,
            "martinis_drunk": 4,
            "rotten_tomato": 61.00

        },
        {
            "name": "craig",
            "films": 2,
            "kills": 25,
            "average_kills":12.5,
            "kissed":4,
            "average_kissed":2,
            "iSlept": 0,
            "average_implicitly_slept":0,
            "eSlept":2,
            "average explicitly_slept":1,
            "believed_dead":1,
            "average_believed_dead": 0.5,
            "bond_james_bond":1,
            "martinis_drunk": 1,
            "rotten_tomato": 80.00
        }

];
"name": "connery",
"name": "lazenby",
"name": "moore",  
"name": "dalton", 
"name": "brosnan",
"name": "craig",  
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

    #c8c4b7
    #ffd42a
    #ff7f2a
    #ff5555
    #ff80e5

    #8787de
    #b380ff
    #5599ff
    #80e5ff
    #8dd35f

    #abc837
];

*/

var bonds = [
	{ "name": "connery", "Films": 6, "Kills": 51, "Average_Kills": 8.5, "Kissed": 18, "Average_Kissed": 3, "Implicitly Slept With": 9, "Average Implicit Slept With": 1.5, "Explicitly Slept With": 6, "Average Explicity Slept With": 1, "Slept With": 15, "Average_Slept_With": 2.5, "Believed Dead": 4, "Average_Believed_Dead": 0.666666667, "Bond James Bond": 3, "Average_Bond_James_Bond": 0.5, "Martinis Drunk": 4, "Average_Martinis_Drunk": 0.666666667, "Average_Audience_Rating": 0.736666667,  "Average_Rotten_Tomatoes_Rating": 0.86, "Profitability": 178.775269, "Average_Profitability": 29.79587817 },
	{ "name": "lazenby", "Films": 1, "Kills": 6, "Average_Kills": 6, "Kissed": 3, "Average_Kissed": 3, "Implicitly Slept With": 2, "Average Implicit Slept With": 2, "Explicitly Slept With": 1, "Average Explicity Slept With": 1, "Slept With": 3, "Average_Slept_With": 3, "Believed Dead": 1, "Average_Believed_Dead": 0, "Bond James Bond": 2, "Average_Bond_James_Bond": 2, "Martinis Drunk": 1, "Average_Martinis_Drunk": 1, "Average_Audience_Rating": 0.62,  "Average_Rotten_Tomatoes_Rating": 0.82, "Profitability": 10.24681163, "Average_Profitability": 10.24681163 },
	{ "name": "moore", "Films": 7, "Kills": 51, "Average_Kills": 7.285714286, "Kissed": 20, "Average_Kissed": 2.857142857, "Implicitly Slept With": 7, "Average Implicit Slept With": 1, "Explicitly Slept With": 11, "Average Explicity Slept With": 1.571428571, "Slept With": 18, "Average_Slept_With": 2.571428571, "Believed Dead": 5, "Average_Believed_Dead": 0.714285714, "Bond James Bond": 10, "Average_Bond_James_Bond": 1.428571429, "Martinis Drunk": 3, "Average_Martinis_Drunk": 0.428571429, "Average_Audience_Rating": 0.587142857,  "Average_Rotten_Tomatoes_Rating": 0.6, "Profitability": 75.96073396, "Average_Profitability": 10.85153342 },
	{ "name": "dalton", "Films": 2, "Kills": 11, "Average_Kills": 5.5, "Kissed": 4, "Average_Kissed": 2, "Implicitly Slept With": 4, "Average Implicit Slept With": 2, "Explicitly Slept With": 0, "Average Explicity Slept With": 0, "Slept With": 4, "Average_Slept_With": 2, "Believed Dead": 0, "Average_Believed_Dead": 0, "Bond James Bond": 2, "Average_Bond_James_Bond": 1, "Martinis Drunk": 2, "Average_Martinis_Drunk": 1, "Average_Audience_Rating": 0.58,  "Average_Rotten_Tomatoes_Rating": 0.72, "Profitability": 8.498284687, "Average_Profitability": 4.249142343 },
	{ "name": "brosnan", "Films": 4, "Kills": 76, "Average_Kills": 19, "Kissed": 12, "Average_Kissed": 3, "Implicitly Slept With": 3, "Average Implicit Slept With": 0.75, "Explicitly Slept With": 6, "Average Explicity Slept With": 1.5, "Slept With": 9, "Average_Slept_With": 2.25, "Believed Dead": 3, "Average_Believed_Dead": 0.75, "Bond James Bond": 5, "Average_Bond_James_Bond": 1.25, "Martinis Drunk": 4, "Average_Martinis_Drunk": 1, "Average_Audience_Rating": 0.6225,  "Average_Rotten_Tomatoes_Rating": 0.61, "Profitability": 14.61956402, "Average_Profitability": 3.654891006 },
	{ "name": "craig", "Films": 2, "Kills": 25, "Average_Kills": 12.5, "Kissed": 4, "Average_Kissed": 2, "Implicitly Slept With": 0, "Average Implicit Slept With": 0, "Explicitly Slept With": 2, "Average Explicity Slept With": 1, "Slept With": 2, "Average_Slept_With": 1, "Believed Dead": 1, "Average_Believed_Dead": 0.5, "Bond James Bond": 1, "Average_Bond_James_Bond": 0.5, "Martinis Drunk": 1, "Average_Martinis_Drunk": 0.5, "Average_Audience_Rating": 0.745,  "Average_Rotten_Tomatoes_Rating": 0.8, "Profitability": 8.374093748, "Average_Profitability": 4.187046874 }
];
var normalized_bonds = [
{ "name": "connery", "Films": 0.857142857, "Kills": 0.671052632, "Average_Kills": 0.447368421, "Kissed": 0.9, "Average_Kissed": 1, "Implicitly Slept With": 1, "Average Implicit Slept With": 0.75, "Explicitly Slept With": 0.545454545, "Average Explicity Slept With": 0.636363636, "Slept With": 0.833333333, "Average_Slept_With": 0.833333333, "Believed Dead": 0.8, "Average_Believed_Dead": 0.888888889, "Bond James Bond": 0.3, "Average_Bond_James_Bond": 0.25, "Martinis Drunk": 1, "Average_Martinis_Drunk": 0.666666667, "Average_Audience_Rating": 0.988814318,  "Average_Rotten_Tomatoes_Rating": 1, "Profitability": 1, "Average_Profitability": 1 },
{ "name": "lazenby", "Films": 0.142857143, "Kills": 0.078947368, "Average_Kills": 0.315789474, "Kissed": 0.15, "Average_Kissed": 1.00, "Implicitly Slept With": 0.222222222, "Average Implicit Slept With": 1, "Explicitly Slept With": 0.090909091, "Average Explicity Slept With": 0.636363636, "Slept With": 0.166666667, "Average_Slept_With": 1, "Believed Dead": 0.2, "Average_Believed_Dead": 0, "Bond James Bond": 0.2, "Average_Bond_James_Bond": 1, "Martinis Drunk": 0.25, "Average_Martinis_Drunk": 1, "Average_Audience_Rating": 0.832214765,  "Average_Rotten_Tomatoes_Rating": 0.953488372, "Profitability": 0.057316718, "Average_Profitability": 0.343900306 },
{ "name": "moore", "Films": 1, "Kills": 0.671052632, "Average_Kills": 0.383458647, "Kissed": 1, "Average_Kissed": 0.952380952, "Implicitly Slept With": 0.777777778, "Average Implicit Slept With": 0.5, "Explicitly Slept With": 1, "Average Explicity Slept With": 1, "Slept With": 1, "Average_Slept_With": 0.857142857, "Believed Dead": 1, "Average_Believed_Dead": 0.952380952, "Bond James Bond": 1, "Average_Bond_James_Bond": 0.714285714, "Martinis Drunk": 0.75, "Average_Martinis_Drunk": 0.428571429, "Average_Audience_Rating": 0.788111218,  "Average_Rotten_Tomatoes_Rating": 0.697674419, "Profitability": 0.42489509, "Average_Profitability": 0.364195791 },
{ "name": "dalton", "Films": 0.285714286, "Kills": 0.144736842, "Average_Kills": 0.289473684, "Kissed": 0.2, "Average_Kissed": 0.67, "Implicitly Slept With": 0.444444444, "Average Implicit Slept With": 1, "Explicitly Slept With": 0, "Average Explicity Slept With": 0, "Slept With": 0.222222222, "Average_Slept_With": 0.666666667, "Believed Dead": 0, "Average_Believed_Dead": 0, "Bond James Bond": 0.2, "Average_Bond_James_Bond": 0.5, "Martinis Drunk": 0.5, "Average_Martinis_Drunk": 1, "Average_Audience_Rating": 0.77852349,  "Average_Rotten_Tomatoes_Rating": 0.837209302, "Profitability": 0.047536131, "Average_Profitability": 0.142608394 },
{ "name": "brosnan", "Films": 0.571428571, "Kills": 1, "Average_Kills": 1, "Kissed": 0.6, "Average_Kissed": 1, "Implicitly Slept With": 0.333333333, "Average Implicit Slept With": 0.375, "Explicitly Slept With": 0.545454545, "Average Explicity Slept With": 0.954545455, "Slept With": 0.5, "Average_Slept_With": 0.75, "Believed Dead": 0.6, "Average_Believed_Dead": 1, "Bond James Bond": 0.5, "Average_Bond_James_Bond": 0.625, "Martinis Drunk": 1, "Average_Martinis_Drunk": 1, "Average_Audience_Rating": 0.83557047,  "Average_Rotten_Tomatoes_Rating": 0.709302326, "Profitability": 0.08177621, "Average_Profitability": 0.122664316 },
{ "name": "craig", "Films": 0.285714286, "Kills": 0.328947368, "Average_Kills": 0.657894737, "Kissed": 0.2, "Average_Kissed": 0.666666667, "Implicitly Slept With": 0, "Average Implicit Slept With": 0, "Explicitly Slept With": 0.181818182, "Average Explicity Slept With": 0.636363636, "Slept With": 0.111111111, "Average_Slept_With": 0.333333333, "Believed Dead": 0.2, "Average_Believed_Dead": 0.666666667, "Bond James Bond": 0.1, "Average_Bond_James_Bond": 0.25, "Martinis Drunk": 0.25, "Average_Martinis_Drunk": 0.5, "Average_Audience_Rating": 1,  "Average_Rotten_Tomatoes_Rating": 0.930232558, "Profitability": 0.046841455, "Average_Profitability": 0.140524366 }];

/*
var normalized_bonds = [
    {
        "name": "connery",
        "films": 0.8571428571428571,
        "kills": 0.6710526315789473,
        "average_kills": 0.4473684210526316,
        "kissed": 0.9,
        "average_kissed": 1,
        "iSlept": 1,
        "average_implicitly_slept": 0.75,
        "eSlept": 0.5454545454545454,
        "average explicitly_slept": 0.6369426751592356,
        "Slept With": 0.833333333, "Average_Slept_With": 0.833333333,
        "believed_dead": 0.8,
        "average_believed_dead": 0.8933333333333334,
        "bond_james_bond": 0.3,
        "martinis_drunk": 1,
        "rotten_tomato": 1
    },
    {
        "name": "lazenby",
        "films": 0.14285714285714285,
        "kills": 0.07894736842105263,
        "average_kills": 0,
        "kissed": 0.15,
        "average_kissed": 0,
        "iSlept": 0.2222222222222222,
        "average_implicitly_slept": 0,
        "eSlept": 0.09090909090909091,
        "average explicitly_slept": 0,
        "Slept With": 0.166666667, "Average_Slept_With": 1,
        "believed_dead": 0.2,
        "average_believed_dead": 0,
        "bond_james_bond": 0.2,
        "martinis_drunk": 0.25,
        "rotten_tomato": 0.9534883720930233
    },
    {
        "name": "moore",
        "films": 1,
        "kills": 0.6710526315789473,
        "average_kills": 0.3836842105263158,
        "kissed": 1,
        "average_kissed": 0.9533333333333333,
        "iSlept": 0.7777777777777778,
        "average_implicitly_slept": 0.5,
        "eSlept": 1,
        "average explicitly_slept": 1,
        "Slept With": 1, "Average_Slept_With": 0.857142857,
        "believed_dead": 1,
        "average_believed_dead": 0.9466666666666667,
        "bond_james_bond": 1,
        "martinis_drunk": 0.75,
        "rotten_tomato": 0.6976744186046512
    },
    {
        "name": "dalton",
        "films": 0.2857142857142857,
        "kills": 0.14473684210526316,
        "average_kills": 0.2894736842105263,
        "kissed": 0.2,
        "average_kissed": 0.6666666666666666,
        "iSlept": 0.4444444444444444,
        "average_implicitly_slept": 1,
        "eSlept": 0,
        "average explicitly_slept": 0,
        "Slept With": 0.222222222, "Average_Slept_With": 0.666666667,
        "believed_dead": 0,
        "average_believed_dead": 0,
        "bond_james_bond": 0.2,
        "martinis_drunk": 0.5,
        "rotten_tomato": 0.8372093023255814
    },
    {
        "name": "brosnan",
        "films": 0.5714285714285714,
        "kills": 1,
        "average_kills": 1,
        "kissed": 0.6,
        "average_kissed": 1,
        "iSlept": 0.3333333333333333,
        "average_implicitly_slept": 0.375,
        "eSlept": 0.5454545454545454,
        "average explicitly_slept": 0.9554140127388535,
        "Slept With": 0.5, "Average_Slept_With": 0.75,
        "believed_dead": 0.6,
        "average_believed_dead": 1,
        "bond_james_bond": 0.5,
        "martinis_drunk": 1,
        "rotten_tomato": 0.7093023255813954
    },
    {
        "name": "craig",
        "films": 0.2857142857142857,
        "kills": 0.32894736842105265,
        "average_kills": 0.6578947368421053,
        "kissed": 0.2,
        "average_kissed": 0.6666666666666666,
        "iSlept": 0,
        "average_implicitly_slept": 0,
        "eSlept": 0.18181818181818182,
        "average explicitly_slept": 0.6369426751592356,
        "Slept With": 0.111111111, "Average_Slept_With": 0.333333333,
        "believed_dead": 0.2,
        "average_believed_dead": 0.6666666666666666,
        "bond_james_bond": 0.1,
        "martinis_drunk": 0.25,
        "rotten_tomato": 0.9302325581395349
    }];
*/
/*
var min_Property_Values = { "films": 1, "kills": 6, average_kills: 0, "kissed": 3, "average_kissed": 0, "iSlept": 0, "average_implicitly_slept": 0, "eSlept": 0, "average explicitly_slept": 0,"believed_dead": 0, "average_believed_dead": 0, "bond_james_bond": 1,  "martinis_drunk": 1,"rotten_tomato": 60 };
var min_Property_Bond_Names = { "films": ["lazenby"], "kills": ["lazenby"], average_kills: ["lazenby"], "kissed": ["lazenby"], "average_kissed": ["lazenby"], "iSlept": ["craig"], "average_implicitly_slept": ["lazenby", "craig"], "eSlept": ["dalton"], "average explicitly_slept": ["lazenby", "dalton"],"believed_dead": ["dalton"], "average_believed_dead": ["lazenby", "dalton"], "bond_james_bond": ["craig"],  "martinis_drunk": ["lazenby", "craig"],"rotten_tomato": ["moore"] };
var normalized_Min_Property_Values = { "films": 0.14285714285714285, "kills": 0.07894736842105263, average_kills: 0, "kissed": 0.15, "average_kissed": 0, "iSlept": 0, "average_implicitly_slept": 0, "eSlept": 0, "average explicitly_slept": 0,"believed_dead": 0, "average_believed_dead": 0, "bond_james_bond": 0.1,  "martinis_drunk": 0.25,"rotten_tomato": 0.6976744186046512 };

var max_Property_Values = { "films": 7, "kills": 76, average_kills: 19, "kissed": 20, "average_kissed": 3, "iSlept": 9, "average_implicitly_slept": 2, "eSlept": 11, "average explicitly_slept": 1.57,"believed_dead": 5, "average_believed_dead": 0.75, "bond_james_bond": 10,  "martinis_drunk": 4,"rotten_tomato": 86 };
var max_Property_Bond_Names = { "films": ["moore"], "kills": ["brosnan"], average_kills: ["brosnan"], "kissed": ["moore"], "average_implicitly_slept": ["dalton"], "eSlept": ["moore"], "average explicitly_slept": ["moore"],"believed_dead": ["moore"], "average_believed_dead": ["brosnan"], "bond_james_bond": ["moore"], "average_kissed": ["connery", "brosnan"], "iSlept": ["connery"],  "martinis_drunk": ["connery", "brosnan"],"rotten_tomato": ["connery"] };
var normalized_Max_Property_Values = { "films": 1, "kills": 1, average_kills: 1, "kissed": 1, "average_kissed": 1, "iSlept": 1, "average_implicitly_slept": 1, "eSlept": 1, "average explicitly_slept": 1,"believed_dead": 1, "average_believed_dead": 1, "bond_james_bond": 1,  "martinis_drunk": 1,"rotten_tomato": 1 };

var average_Property_Values = { "films": 1.1428571428571428, "kills": 12.071428571428571, average_kills: 3.1635714285714287, "kissed": 3.0714285714285716, "average_kissed": 0.7042857142857143, "iSlept": 1.1428571428571428, "average_implicitly_slept": 0.26785714285714285, "eSlept": 1.4285714285714286, "average explicitly_slept": 0.29071428571428576,"believed_dead": 0.7142857142857143, "average_believed_dead": 0.13999999999999999, "bond_james_bond": 1.4285714285714286,  "martinis_drunk": 0.7857142857142857,"rotten_tomato": 25.357142857142858 };
var normalized_Average_Property_Values = { "films": 0.16326530612244897, "kills": 0.1588345864661654, average_kills: 0.16650375939849624, "kissed": 0.15357142857142855, "average_kissed": 0.23476190476190475, "iSlept": 0.12698412698412698, "average_implicitly_slept": 0.13392857142857142, "eSlept": 0.12987012987012986, "average explicitly_slept": 0.18516833484986353,"believed_dead": 0.14285714285714285, "average_believed_dead": 0.18666666666666668, "bond_james_bond": 0.14285714285714285,  "martinis_drunk": 0.19642857142857142,"rotten_tomato": 0.29485049833887045 };
*/





