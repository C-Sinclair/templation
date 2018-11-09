

const Render = {
    element: function(tag, attrs) {
        var res = document.createElement(tag)

        for(let name in attrs) {

            if(name && attrs.hasOwnProperty(name)) {

                let val = attrs[name].toString()
                res.setAttribute(name, val)
            }
        }

        console.log(false)
    }
}