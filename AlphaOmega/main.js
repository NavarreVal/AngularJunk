var length = 10; 
var height = 10;
var omega = '\u03A9';
var alpha = '\u03B1'

grid= [];

for (i=0; i<height; i++) {
    grid.push([]);
    for (x=0; x<length; x++){
        if (x % 2 != 0){
        grid[i].push(omega)
    } else {
        grid[i].push(alpha);
    }
    }
}


    
    
console.log(grid);
