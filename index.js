//finding duplicate number

function a(){
    const input = [1,2,3,4,5,6,3,7,8,9,4,2,2,5,48,65,321,1]
    const iN=9;
    const arr=[];
    
    for(let i=0;i<input.length;i++){
       for(let j=0;j<input.length;j++){
           
           if(i!==j){
           
           if(input[i]==input[j]){
              
              console.log(input[i],input[j])
           }
           }
        
    } 
    }
    
    
}
a();


//returning number pair whose sum is equal to the given number.

function nP(){
    const input = [1,2,3,4,5,6,3,7,8,9,4,2,2,5,48,65,321,1]
    const iN=9;
    const arr=[];
    
    for(let i=0;i<input.length;i++){
       for(let j=1;j<input.length;j++){
           
           if(input[i]+input[j]==iN){
              
              console.log(input[i],input[j])
           }
        
    } 
    }
    
    
}
nP();


//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


function twoSum(nums,target){

    
    
    for(let x=0;x<nums.length;x++){
        for(let y=1;y<nums.length;y++){
            if(nums[x]+nums[y]==target){
                console.log(x,y);
            }
        }
    }
}

twoSum([2,7,11,15],9);


//