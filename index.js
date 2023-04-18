// code your solution here
// 


 
  function superbowlWin(result){
    const reResult = result.find(result=> result.result ==="W");
    if(reResult){
        return reResult.year
    }else{
        return
    }

}
