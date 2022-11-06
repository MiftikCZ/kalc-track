var frawem = class {
    constructor() {
        this.string = "string"
        this.s = this.string

        this.element = "element"
        this.elem = this.element
        this.e = this.element

        this.reset_elem = "reset-element"
        this.re = this.reset_elem

        return this
    }
    
    set(variable="string",content="content",type=this.string) {
        let back = true
        document.querySelectorAll("variable").forEach(e=>{
            if(e.getAttribute("v")==variable) {
                back=false
                if(type=="element"||type=="reset-element") {
                    if(type=="reset-element") e.innerHTML=""
                    e.appendChild(content)
                } else {
                    e.innerHTML=content
                }
            }
        })
        if(back) {
            this.dec(variable,content,type)
        }
    }

    dec(variable="string",content="content",type=this.string) {
        var _txt = document.querySelector("body").innerHTML
        _txt = _txt.split(`{${variable}}`).join("<variable v='"+variable+"'></variable>")
        document.querySelector("body").innerHTML = _txt
        this.set(variable,content,type)
    }
}

var data = {
    save: (key, value) => {
        return localStorage.setItem(key, value)
    },
    get: (key) => {
        if(localStorage.getItem(key) == "null" || !localStorage.getItem(key)){
            return null
        }
        return localStorage.getItem(key) || null
    }
}