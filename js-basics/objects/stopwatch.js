function stopwatch(){
    let durationtime =0;
    let running=0;
    let start,end;
    Object.defineProperty(this,'duration',{
        get: function(){
            return durationtime;
        }
    })
    this.start=function(){
        if(running===1)throw new error("already stopwatch is running")
        running=1;
        start=new Date();
    }
    this.stop=function(){
        if(running===0)throw new error("already stopwatch is not running")
        running=0
        end=new Date();
        durationtime+=(end.getTime()-start.getTime())/1000
    }
    this.restart=function(){
        start=null
        end=null
        running=0
        duration=0;
    }
}

const run = new stopwatch();
console.log(run)
run.start()

console.log(run.duration)