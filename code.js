// Kane Kriz
// UWYO COSC 3020 Algorithms
// Detecting Isomorphism Exercise - primary js file
// 15 April 2025
//


//Note: algorithm needs to handle both the case where the two graphs are isomorphic and where they are not isomorphic.
// avoid repeated work as noted within the directions

//Per in-class definition: Isomorphic - Two graphs are isomorphic if they have the same structure (ignoring vertex names)


//


function areIsomorphic(graph1, graph2)
{

    //
    
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
        //early rejection based on size mismatch
    }

    //
    
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

    //

    //mapping verification
    //recursive
    function verifyMapping(currentIndex)
    {
        if(currentIndex == verticesGraph1.length)
        {
            //check for overall complete mapping
            for(var i = 0; i < verticesGraph1.length; i++)
            {
                var sourceVertex = verticesGraph1[i];
                var mappedVertex = vertexMapping[sourceVertex];
                
                var sourceNeighbors = graph1[sourceVertex];
                var targetNeighbors = graph2[mappedVertex];

                //verifying number of neighbors from each of the above taken graphs to match, progress if true
                if(sourceNeighbors.length != targetNeighbors.length)
                {
                    return false;
                }
                
                for(var j = 0; j < sourceNeighbors.length; j++)
                {
                    var isMapped = false;
                    
                    for(var k = 0; k < targetNeighbors.length; k++)
                    {
                        if(targetNeighbors[k] == vertexMapping[sourceNeighbors[j]])
                        {
                            isMapped = true;
                            break;
                        }
                    }
                    
                    if(!isMapped)
                    {
                        return false;
                    }
                }
            }
            
            return true; //everything properly mapped
        }

        var currentVertex = verticesGraph1[currentIndex]; //locating current index being mapped
        
        for(var i = 0; i < verticesGraph2.length; i++)
        {
            var targetVertex = verticesGraph2[i];
            
            if(!usedVertices[targetVertex]) //usedVertices to ensure this actually progresses
            {
                vertexMapping[currentVertex] = targetVertex;
                usedVertices[targetVertex] = true;
                
                if(verifyMapping(currentIndex + 1))
                {
                    return true;
                }
                
                vertexMapping[currentVertex] = undefined;
                usedVertices[targetVertex] = false;
            }
        }
        
        return false; //no valid mapping isMapped
    }
    
    return verifyMapping(0); //recursive mapping, begining on first vertex 0 outward
}

//
