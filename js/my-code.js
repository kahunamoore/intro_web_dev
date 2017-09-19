function add(x)
{
  alert(this);
  alert(x);
  return x;
}


// Nothing to see here - we won't talk about JS until later in the course

// This is a "comment" in Javascript, it does nothing
// but is good for communicating "intent" of nearby code.

// There are two kinds of comments in Javascript:

// This "single-line" kind
// Anything following the double slash
// and the end of the same line of text
// is ignored.

/* And this "multi-line kind.
   CSS uses this kind of comment too.
   
   Note: Anything between the "earmuffs" is ignored.
         A comment *cannot* be nested inside another comment. */
