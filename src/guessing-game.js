class GuessingGame {
    constructor() {
     
    }

    setRange(min, max) {
this.minNum = min
this.maxNum = max

    }

    guess() {
      return  Math.round( (this.maxNum + this.minNum)/2)
    }

    lower() {
        return this.maxNum = (Math.round((this.maxNum + this.minNum) / 2))
    }

    greater() {
        return this.minNum = (Math.round((this.maxNum + this.minNum) / 2))
    }
}

module.exports = GuessingGame;
