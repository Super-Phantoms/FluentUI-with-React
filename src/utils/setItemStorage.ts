export function setJSONStorage (field:string, item:any) {
    if(!item) return; 
    localStorage.setItem(field, JSON.stringify(item));
}

export function setStringStorage (field : string, item: string) {
    if(!item || item === '') return;
    localStorage.setItem(field, item);
}

export function getJSONStorage(field: string) {
    let result = localStorage.getItem(field);

    if(!result || result === '') return {};

    return JSON.parse(result);
}

export function getStringStorage(field: string) {
    let result = localStorage.getItem(field);

    if(!result) return '';

    return result;
}