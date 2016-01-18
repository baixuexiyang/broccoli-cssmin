# Description   

>  
broccoli-cssmin is used to compress css file    
    
# Install   
```
npm install broccoli-cssmin  
```   
# Usage   
```
var cssmin = require("broccoli-cssmin");    
cssmin(tree, {   
	maxLineLen: 0,  
    expandVars: false,   
    cuteComments: true   
});    
```  
# Options  
### maxLineLen  
  adds a newline (approx.) every n characters; 0 means no newline and is the default value     
### expandVars   
  expands variables; by default, @variables blocks are preserved and var(x)s are not expanded   
### cuteComments    
  preserves newlines within and around preserved comments   

# Issues  
[new Issue](https://github.com/baixuexiyang/broccoli-cssmin/issues/new)     

