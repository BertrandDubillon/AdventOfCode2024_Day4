
function test(fileInput) {
    // const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const fileContents = event.target.result;
      const lines = fileContents.split('\n');  
      let xmasArray = new Array;
      let xmasCount = 0;
      
      //Making a 2d array with the input. Cleaning empty elements with filter
      for (let index = 0; index < lines.length; index++) {
          const line = lines[index];
          xmasArray.push(line)
        }
        xmasArray = xmasArray.filter((el)=>{
        return el;
    })  
    

    
        
      


      for (let rowIndex = 0; rowIndex < xmasArray.length; rowIndex++) {
        const currentLine = xmasArray[rowIndex];
            for (let colIndex = 0; colIndex < currentLine.length; colIndex++) {
                const currentLetter = currentLine[colIndex];
                if (currentLetter =='X') {                    
                    // console.log('X found at X :' + colIndex + 'Y :' + rowIndex);
                    //E
                    if ( colIndex+3 < currentLine.length){
                        if(
                            xmasArray[rowIndex][colIndex+1] === 'M' &&
                            xmasArray[rowIndex][colIndex+2] === 'A' &&
                            xmasArray[rowIndex][colIndex+3] === 'S'
                            ) 
                            {
                                
                                xmasCount ++;
                        }
                    }
                     //SE
                     if (colIndex+3 < currentLine.length && rowIndex+3 < xmasArray.length){
                        if(
                            xmasArray[rowIndex+1][colIndex+1] === 'M' &&
                            xmasArray[rowIndex+2][colIndex+2] === 'A' && 
                            xmasArray[rowIndex+3][colIndex+3] === 'S' 
                           )
                            {
                                
                                xmasCount ++;  
                        }
                     }                     
                     //S 
                     if (rowIndex+3 < xmasArray.length){
                        if( xmasArray[rowIndex+1][colIndex] === 'M' &&
                            xmasArray[rowIndex+2][colIndex] === 'A' && 
                            xmasArray[rowIndex+3][colIndex] === 'S')
                            {
                                                                xmasCount ++;
                            }
                        }                   
                  
                    //SW 
                    if (colIndex-3 >= 0 && rowIndex+3 < xmasArray.length){
                        if( xmasArray[rowIndex+1][colIndex-1] === 'M' &&
                            xmasArray[rowIndex+2][colIndex-2] === 'A' && 
                            xmasArray[rowIndex+3][colIndex-3] === 'S')
                            {
                                
                                xmasCount ++;
                            }
                        }
                    //W  
                    if (colIndex-3 >= 0){
                        if( xmasArray[rowIndex][colIndex-1] === 'M' &&
                            xmasArray[rowIndex][colIndex-2] === 'A' && 
                            xmasArray[rowIndex][colIndex-3] === 'S')
                            {
                                
                                xmasCount ++;
                            }
                        } 
                    //NW  
                    if (colIndex-3 >= 0 && rowIndex-3 >= 0){
                        if( xmasArray[rowIndex-1][colIndex-1] === 'M' &&
                            xmasArray[rowIndex-2][colIndex-2] === 'A' && 
                            xmasArray[rowIndex-3][colIndex-3] === 'S')
                            {
                                
                                xmasCount ++;
                            }
                        }   
                    
                    //N
                    if (rowIndex-3 >= 0){
                        if( xmasArray[rowIndex-1][colIndex] === 'M' &&
                            xmasArray[rowIndex-2][colIndex] === 'A' && 
                            xmasArray[rowIndex-3][colIndex] === 'S')
                            {
                                
                                xmasCount ++;
                            }
                        } 
                   
                    //NE
                    if (colIndex+3 < currentLine.length && rowIndex-3 >= 0){
                        if( xmasArray[rowIndex-1][colIndex+1] === 'M' &&
                            xmasArray[rowIndex-2][colIndex+2] === 'A' && 
                            xmasArray[rowIndex-3][colIndex+3] === 'S')
                            {
                                
                                xmasCount ++;
                            }
                        }        
                }
                
            }
            
        } 
        console.log(xmasCount);
               
    }
      reader.readAsText(file); 
    }