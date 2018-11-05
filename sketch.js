var tree

function setup() {
    createCanvas(500, 400)
    background(51)
    tree = new Tree() // Creates a tree object to hold our data
    for (var i=0; i < 10; i++) // Adds 10 random numbers between 0 and 100 inclusive(?) to BST to be traversed
    {
	tree.addValue(floor(random(0,100)))
    }
    console.log(tree)
    tree.traverse() // Traverses and prints out the path

    var result = tree.search(10) // Searches for the given number in the tree. Stores in var result if found
    if (result == null)
    {
	console.log("Not found")
    }
    else
    {
	console.log(result)
    }
}

