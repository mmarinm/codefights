function minesweeper(matrix) {
  var newArr = [];

  for(var i=0; i < matrix.length; i++){
    newArr.push([]);
    for(var j=0; j < matrix[i].length; j++){
      var cnt = 0;
      if(i>0){
        if(matrix[i-1][j]){
          cnt += 1;
        }
        if(matrix[i-1][j+1]){
          cnt += 1;
        }
        if(matrix[i-1][j-1]){
          cnt += 1;
        }
      }
      if(i < matrix.length - 1){
        if(matrix[i+1][j]){
          cnt +=1;
        }
        if(matrix[i+1][j+1]){
          cnt += 1;
        }
        if(matrix[i+1][j-1]){
          cnt +=1;
        }
      }

      if(matrix[i][j+1]){
        cnt +=1;
      }
      if(matrix[i][j-1]){
        cnt +=1;
      }
      newArr[i].push(cnt)
    }
  }
  return newArr
}
