const UTILS={
    readDataLocal: (name, def)=>{
        def = def || null;
        var myarrjsonstring = localStorage.getItem(name);
        return myarrjsonstring == null ? def : JSON.parse(myarrjsonstring);
    },
    
    saveDataLocal: (name, data)=>{
        var nval = JSON.stringify(data);
        localStorage.setItem(name, nval);
    }
}
export default UTILS;