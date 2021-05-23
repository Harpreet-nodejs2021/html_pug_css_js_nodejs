var numbers=[]; // Empty Array
for(let i=0; i<1000; i++){
    numbers[i] = i + 1;
}

numbers = numbers.reverse();

console.log(numbers);

/*
[
  1000, 999, 998, 997, 996, 995, 994, 993, 992, 991, 990,
   989, 988, 987, 986, 985, 984, 983, 982, 981, 980, 979,
   978, 977, 976, 975, 974, 973, 972, 971, 970, 969, 968,
   967, 966, 965, 964, 963, 962, 961, 960, 959, 958, 957,
   956, 955, 954, 953, 952, 951, 950, 949, 948, 947, 946,
   945, 944, 943, 942, 941, 940, 939, 938, 937, 936, 935,
   934, 933, 932, 931, 930, 929, 928, 927, 926, 925, 924,
   923, 922, 921, 920, 919, 918, 917, 916, 915, 914, 913,
   912, 911, 910, 909, 908, 907, 906, 905, 904, 903, 902,
   901,
  ... 900 more items
]
*/

var evenNumbers = numbers.filter(function(val){
    if(val % 2 == 0){
        return val;
    }
    else{
        // Empty ELSE-Statement -> Returns no value when the ELSE condition is met
    }
});

console.log(evenNumbers);

/*
[
  1000, 998, 996, 994, 992, 990, 988, 986, 984, 982, 980,
   978, 976, 974, 972, 970, 968, 966, 964, 962, 960, 958,
   956, 954, 952, 950, 948, 946, 944, 942, 940, 938, 936,
   934, 932, 930, 928, 926, 924, 922, 920, 918, 916, 914,
   912, 910, 908, 906, 904, 902, 900, 898, 896, 894, 892,
   890, 888, 886, 884, 882, 880, 878, 876, 874, 872, 870,
   868, 866, 864, 862, 860, 858, 856, 854, 852, 850, 848,
   846, 844, 842, 840, 838, 836, 834, 832, 830, 828, 826,
   824, 822, 820, 818, 816, 814, 812, 810, 808, 806, 804,
   802,
  ... 400 more items
]
*/

var oddNumbers = numbers.filter(function(val){
    if(val % 2 !== 0){
        return val;
    }
    // else{} -> No difference on the output, but it is a good practice to include the else-statement part
});

console.log(oddNumbers);

/*
[
  999, 997, 995, 993, 991, 989, 987, 985, 983, 981, 979, 977,
  975, 973, 971, 969, 967, 965, 963, 961, 959, 957, 955, 953,
  951, 949, 947, 945, 943, 941, 939, 937, 935, 933, 931, 929,
  927, 925, 923, 921, 919, 917, 915, 913, 911, 909, 907, 905,
  903, 901, 899, 897, 895, 893, 891, 889, 887, 885, 883, 881,
  879, 877, 875, 873, 871, 869, 867, 865, 863, 861, 859, 857,
  855, 853, 851, 849, 847, 845, 843, 841, 839, 837, 835, 833,
  831, 829, 827, 825, 823, 821, 819, 817, 815, 813, 811, 809,
  807, 805, 803, 801,
  ... 400 more items
]
*/

// Last 10 odd numbers

for(let index = 499; index >= 490; index--){
    console.log(`Odd number at index ${index}: ${oddNumbers[index]}`);
}

/*
Odd number at index 499: 1
Odd number at index 498: 3
Odd number at index 497: 5
Odd number at index 496: 7
Odd number at index 495: 9
Odd number at index 494: 11
Odd number at index 493: 13
Odd number at index 492: 15
Odd number at index 491: 17
Odd number at index 490: 19
*/

// First 20 even numbers

for(let position = 0; position < 20; position++){
    console.log(`Even number at index ${position}: ${evenNumbers[position]}`);
}

/*
Even number at index 0: 1000
Even number at index 1: 998
Even number at index 2: 996
Even number at index 3: 994
Even number at index 4: 992
Even number at index 5: 990
Even number at index 6: 988
Even number at index 7: 986
Even number at index 8: 984
Even number at index 9: 982
Even number at index 10: 980
Even number at index 11: 978
Even number at index 12: 976
Even number at index 13: 974
Even number at index 14: 972
Even number at index 15: 970
Even number at index 16: 968
Even number at index 17: 966
Even number at index 18: 964
Even number at index 19: 962
*/

//------------------------------------------------------

var mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

var newMutantsArray = mutants.filter(function(mutantName){
    if(mutantName == 'Magneto' || mutantName == 'Iceman' || mutantName == 'Gambit'){
        // Empty IF-Statement -> Returns no value when the condition is met
    }else{
        return mutantName;
    }
})
console.log(newMutantsArray); // filtered list

// [ 'Professor X', 'Cyclops', 'Angel', 'Beast', 'Phoenix', 'Logan' ]