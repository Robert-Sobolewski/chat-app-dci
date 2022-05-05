
export function demo(n: number):string{

    let output ="";
    let arr = new Array(n).fill(0).map((v:number, i:number) =>v =i)
    arr.map((v:number)=>output += v%2==0? "Odd ": "Even ")
    return output;
}