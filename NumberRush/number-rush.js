class numberRush {
    constructor(tagId, options) {
        this.tagName = tagId;
        this.speed = this._speed(options)
        this.maxNumber = this._maxNumber(options)
        this.steep = this._steep(options)
        this.render()
    }
    scrollActiv = true
    render(){
        let obgTag = document.getElementById(`${this.tagName}`);
        let numberTag = this._numberRen(obgTag)
        let timeTag = this.speed;
        let numberMax = this.maxNumber;
        let mrginTop = obgTag.offsetTop;
        window.addEventListener('scroll',()=>{
            let mrginTop = obgTag.offsetTop;
            let scrollop = window.scrollY + window.innerHeight;
            if(scrollop > mrginTop && this.scrollActiv === true){
                this._activeView(obgTag, timeTag, numberMax, numberTag)
            }
        })
        if(mrginTop < window.innerHeight){
            this._activeView(obgTag, timeTag, numberMax, numberTag)
        }
    }
    _activeView(obgTag, timeTag, numberMax, numberTag){
        this.scrollActiv = false;
        if(obgTag.className != `activ-${this.tagName}`){
            obgTag.classList.add(`activ-${this.tagName}`)
            this._numRash(obgTag, timeTag, numberMax, numberTag)
        } 
    }
    _numberRen(obgTag){
        let numberBefore = obgTag.innerText;
        let numberAfter = Number(numberBefore)
        return numberAfter
    }
    _numRash(obgTag, timeTag, numberMax, numberTag){
        
        if(numberTag < numberMax){
            setTimeout(()=>{
                let summm = this._numSteep(numberTag, numberMax);
                obgTag.innerText = summm
                this._numRash(obgTag, timeTag, numberMax, summm)
            }, timeTag)
        }
    }
    _numSteep(numberTag, numberMax){
        if (numberTag + this.steep < numberMax){
            return numberTag + this.steep;
        } else {
            let numberSteep = numberMax - numberTag;
            return numberTag + numberSteep;
        }
    }
    _speed(options){
        if (options === undefined || options.speed === undefined){
            return 5;
        } else {
            return options.speed;
        }
    }
    _maxNumber(options){
        if (options === undefined || options.maxNumber === undefined){
            return 300;
        } else {
            return options.maxNumber;
        }
    }
    _steep(options){
        if (options === undefined || options.steep === undefined){
            return 1;
        } else {
            return options.steep;
        }
    }
}