class GuessingGame {
    constructor(min, max, number) {
        this.result = 0;
        this.average = 0;
        this.number = number;
        
  
    
    }
  
    setRange(min, max) {
        this.min = min;
        this.max = max;
  
    }
  
    guess() {
      
        while(this.result !== this.number){
         
          this.average = Math.floor((this.max + this.min) / 2);
           if(this.number > this.average){
            this.lower();
           } else if (this.number < this.average){
            this.greater();
           } else {
               this.result = this.average;
               
           }
           
        }
        return this.result;
    }
  
    lower() {
       return this.min = this.average;
    }
  
    greater() {
  return this.max = this.average;
    }
  }

module.exports = GuessingGame;
