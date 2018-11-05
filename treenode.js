function TreeNode(val) {
    this.value = val
    this.left = null
    this.right = null
}

TreeNode.prototype.search = function(val) {
    if (this.value == val)
    {
	return this
    }
    else if (val < this.value && this.left != null) {
	return this.left.search(val)
    }
    else if (val > this.value && this.right != null) {
	return this.right.search(val)
    }
    return null
}

TreeNode.prototype.visit = function() {
    if (this.left != null)
    {
	this.left.visit()
    }
    console.log(this.value)
    if (this.right != null)
    {
	this.right.visit()
    }
}

TreeNode.prototype.addNode = function(node) {
    if (node.value < this.value)
    {
	if (this.left == null)
	{
	    this.left = node
	}
	else
	{
	    this.left.addNode(node)
	}
    }
    else if (node.value > this.value)
    {
	if (this.right == null)
	{
	    this.right = node
	}
	else
	{
	    this.right.addNode(node)
	}
    }
}
