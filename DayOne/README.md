Helper file:

I call the function and as the first (and last too :D) it executes the map
This map will take a value from the array that we are using, and evaluates whether the sum of it by itself or any other number in the array is equal to k.
If it finds out one value that the sum of it by any other evaluates true, it'll create and return an array with these two values.

At the end, when the maps is finished, we have a filter.
This filter will look at the array, and since it's returned from a map function, the false evaluations would be returned as undefined.
So we would have an array, with the value that we desired, but also, with a lot of indexes that would be just undefined.
It would look like this:
[[10, 7], undefined, undefined, undefined]

When we use the filter, it get rid of these undefined values, and return just the desired values.

Hope you've understood!!

'k' is just the name of the parameter, and there isn't any complex meaning.