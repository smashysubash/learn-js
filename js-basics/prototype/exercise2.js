
function extend(child,parent){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}

//constructing function
function HtmlElement(){
    this.click = function(){
        console.log('clicked')
    }
}

//protype function for HtmlElement
HtmlElement.prototype.focus = function(){
    console.log('focused')
}

function HtmlSelectElement(arr=[]){
    this.items=arr
    this.additems=function(item){
        this.items.push(item)
    }
    this.removeitem = function(item){
        this.items.splice(this.items.indexOf(item),1)
    }
    this.render = function(){
        return `<select>${this.items.map(item =>`<option>${item}</option>`).join('')}
        </select>`
    }
}

extend(HtmlSelectElement,HtmlElement)

function HtmlimageElement(src){
    this.src=src
    this.render = function(){
        return `<img src="${this.src}" />`; 
    }
}
extend(HtmlimageElement,HtmlElement)