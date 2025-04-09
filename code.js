// Kane Kriz
// UWYO COSC 3020
// Detecting Isomorphism Exercises
// 9 April 2025
//


//Note: algorithm needs to handle both the case where the two graphs are isomorphic and where they are not isomorphic.
// avoid repeated work as noted within the directions



function areIsomorphic(graph1, graph2)
{
    //early check for if graphs have same number of vertices
    var vertexCount1 = 0;
    var vertexCount2 = 0;
    
    for(var vertex in graph1)
    {
        vertexCount1++;
    }
    
    for(var vertex in graph2)
    {
        vertexCount2++;
    }
    
    if(vertexCount1 != vertexCount2)
    {
        return false;
    }

    var verticesGraph1 = [];
    var verticesGraph2 = [];
    
    for(var vertex in graph1)
    {
        verticesGraph1.push(vertex);
    }
    
    for(var vertex in graph2)
    {
        verticesGraph2.push(vertex);
    }

    var vertexMapping = {};
    var usedVertices = {};

    // Recursive mapping verification
    function verifyMapping(currentIndex)
    {
        ///////
    }
}
