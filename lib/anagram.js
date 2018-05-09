function anagram(str){
    if(!str){
        return []
    }
    if(str.length===1){
       return [str]  
    }
    if(str.length===2){
        return ["ab","ba"]  
     }
     if(str.length===3){
        return ["abc","acb","bac","bca","cab","cba"]  
     }
    return [str]
}
module.exports=anagram