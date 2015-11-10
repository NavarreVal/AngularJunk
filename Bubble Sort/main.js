//func bublesort( var a as array )
//    for i from 1 to N 
//        for j from 0 to N - 1
//            if a[j] > a[j + 1]
//                swap( a[j], a[j + 1] )
//end func


////Sort an array called 'a'
//function bubbleSort(a) {   
//    //find the item in the 1 spot (then add one to move to the next item)
//    for (var i = 1; i < a.length; i++) {
//        //find the item in the 0 spot (then add one to move to the next item)
//        for (var j = 0; j < a.length - 1; j++) {
//            //compare the two items
//            if (a[j] > a[j + 1]) {
//                //store the items in temp variables
//                var tempA = a[j];
//                var tempB = a[j + 1];
//                //swap the items.  If the items were compared at 'if', then these will not run. obviously.
//                a[j] = tempB;
//                a[j + 1] = tempA;
//            }
//        }
//    }
//}

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(a) {
    for (var i = 1; i < a.length; i++) {
        for (var j = 0; j < a.length -1; j++) {
            if (a[j] > a[j + 1]) {
                var tempA = a[j];
                var tempB = a[j + 1];
                a[j] = tempB;
                a[j + 1] = tempA;
            }
        }
    }
}

console.log(a);
bubbleSort(a);
console.log(a);