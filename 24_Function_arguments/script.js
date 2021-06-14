
//No arguments:

// const paint = function () {
//     console.log("The wall has been painted red");
// }

// calling the function
// paint();

//Single argument:

const paint = function (color) {
    console.log("The wall has been painted " + color);
}

paint("green");
paint("red");

//what happens if we call the function without an argument?
//const paint = function (color) {
//     console.log("The wall has been painted ");
// }
// it just logged "The wall has been painted"; no argument so no color


// Multiple arguments:

// This comment section was practice and did not work, I tryed different things but
// took me a while to get it, at the beginning color was logged as 'undefinded', now I know
// that I wasn't calling it, I was just calling north_wall or south_eats_wall

// const paintWall = function (wall, color) {
//     console.log("The " + wall + " has been painted " + color);
// }

// const north_wall = 'north wall';
// const south_east_wall = 'south-east wall';


// paintWall(north_wall); here I was missing adding the color
// paintWall(south_east_wall);

// Multiple arguments (hopefully correct this time):

const paintWall = function (wall, color) {
    console.log("The " + wall + " has been painted " + color);
}

const north_wall = 'north wall';
const north_color = 'orange';

const south_east_wall = 'south-east wall';
const south_color = 'grey';

paintWall(north_wall, north_color);
paintWall(south_east_wall, south_color);

//does the order of the arguments matter when calling the function?
// if I change the order inside the (wall, color), then color and wall are switched 
// on the message: "The grey has been painted south-east wall" 
// I don't really understand yet what I'm doing