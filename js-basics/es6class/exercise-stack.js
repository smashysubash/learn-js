const _data = new WeakMap()

class Stack{
    constructor(){
        _data.set(this,[])
    }
    peek(){
        if(_data.get(this).length<1) throw new Error("Stack is empty")
        return _data.get(this)[_data.get(this).length-1]
    }
    pop(){
        if(_data.get(this).length<1) throw new Error("Stack is empty")
        let a = _data.get(this)
        let l = a.pop()
        return l;
    }
    push(itm){
        let a = _data.get(this)
        a.push(itm)
    }
    get count(){
        return _data.get(this).length
    }
    
}

const s = new Stack()