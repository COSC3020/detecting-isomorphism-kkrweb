# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?


//


Name: Kane Kriz

Start Date: 3 April 2025

Last Edited: 15 April 2025

Feedback Request 1 Date: 15 April 2025


//


Feedback Request 2: 16 April 2025

//


Response:

Per in-class definition: Isomorphic - Two graphs are isomorphic if they have the same structure (ignoring vertex names)

--------

The implementation checks for graph isomorphism by comparing vertex counts and then attempting to find a valid vertex mapping between the two graphs (that also keeps the observed structure).

It works via systematic testing of different pairings of vertices between the graphs. 

As it builds a match path between the graphs, it constantly checks whether connections between nodes are preserved as seen within the other compared graph.

The function begins with an early check for potential vertex count mismatches, which provides an immediate rejection if the graphs have different sizes thus making isomorphism impossible.

This check involves counting vertices in both graphs, requiring $O(V)$ time for each graph where V is the number of vertices.

The core of the implementation lies in the `verifyMapping` recursive function.

The function systematically attempts to map vertices from the first input graph to vertices in the second graph while checking if adjacency relationships are preserved as desired for proper isomorphsim.

The function uses the `vertexMapping` object to track current assignments, and uses the `usedVertices` object to prevent duplicate mappings.

For each vertex in the first graph, the algorithm attempts to map it to every possible unused vertex in the second graph. 

At each step of the recursion, there are up to V possible vertices to map to.

This expands the search tree by V at every processed recursion step.

This leads to V! possible mappings in the worst case, since each mapping choice is forced to reduce potential options in subsequent steps.

When a complete mapping is found when `currentIndex` reaches `verticesGraph1.length`, the implementation verifies that all original adjacency relationships observed in the first graph exist in the second. 

This verification step involves checking all edges in both graphs, contributing $O(E)$ work where E is the number of edges.

In the assumed worst case, the algorithm must cover all possible vertex mappings.

That, combined with the depth of recursion leads to factorial time complexity, as in the worst scenario it must cover all possible permutations of vertex mappings between the two input graphs. 

Additionally, each V! permutation within this above worst case takes O(E) work to verify all edges for required edge preservation from that of the original graph.

Due to this, the worst case big theta time complexity of the algorithm is $Θ(V! * E)$.




//


Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


Citations: 

https://towardsdatascience.com/testing-if-two-graphs-are-isomorphic-cf6c44ab551e/

https://facultyweb.kennesaw.edu/mlavrov/courses/graph-theory/lecture9.pdf
