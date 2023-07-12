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

function HtmlSelectElement(arr){
    let array=typeof arr === "Array" ?[...arr]: []
    Object.defineProperty(this,'items',{
        get: function(){
            return array
        }
    })
    this.additems=function(item){
        array.push(item)
    }
    this.removeitem = function(item){
        array.splice(this.array.indexOf(item),1)
    }
}

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype)
HtmlSelectElement.prototype.constructor = HtmlSelectElement

