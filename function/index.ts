export const mapColorTag = (tag: "new" | "suggest" | "bestseller"): "error" | "warning" | "success" | "default" => {
    switch (tag) {
        case "new":
            return "error"
            break;
        case "suggest":
            return "warning"
            break
        case "bestseller":
            return "success"
            break
        default:
            return "default"
            break;
    }
}

export const mapTagTitle = (tag: "new" | "suggest" | "bestseller"): "ขายดี" | "มาใหม่" | "แนะนำ" | "อื่นๆ" => {
    switch (tag) {
        case "new":
            return "มาใหม่"
            break;
        case "suggest":
            return "แนะนำ"
            break
        case "bestseller":
            return "ขายดี"
            break
        default:
            return "อื่นๆ"
            break;
    }
}

export const numberFormat = (num:number):string=>{
    return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}