export  function mediaPrefix(devObj:any){
    let {media} = devObj
    return "assets/media/"+media
}

export function classPrefix(devObj:any){
    let {view} = devObj
    let prefix = "a_p_p_"+view 
    return (devObj:any)=>{
        let {val} = devObj
        return prefix+val
    }
}