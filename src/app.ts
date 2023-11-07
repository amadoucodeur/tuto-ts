// const a: string = "hello";
// const n: number = 2;
// const b: boolean = true;
// const arrs: string[] = ["hello", "world"];
// const arrn: number[] = [2, 3];
// const arra: any[] = [2, "3"];
// const obje: { name: string; lasname: string } = {
//   name: "Coulibaly",
//   lasname: "Amadou",
// };
// const obje2: { name: string; [key: string]: string } = {
//   name: "Coulibaly",
//   r1: "x",
// };
// const date: Date = new Date();

// const f = (x: string | number, y: string): number => {
//   return 1;
// };

// const btn = document.querySelector("#compteur") as HTMLButtonElement;
// const btn = document.querySelector("#compteur")!;
// const btn2 = <HTMLButtonElement>document.querySelector("#compteur");

// //Types
type user = {name: string, lastname: string, age: number}
// type kkey = keyof user
// type name = user['name']
// type str = string
// type int = number
// type sori = str | int
// type indentity<MyType> = (args: MyType) => MyType

// const xx = {n:"nn", x: "xx"}
// type user2 = typeof xx

// //Generique et alias
// function f<MyType>(n: MyType): MyType{
//     return n
// }

// function f<MyType extends{length: number}>(n: MyType): MyType {
//   return n;
// }


// // readonly
// function x1<T>(a: readonly T[]): T{
//     return a[0]
// }

// class
class A{
    private pro1 = 1
    protected pro2 = 2
    public pro3 = 3
}
class B{
    constructor(public a: number, b: string){}
}




// const btn = document.querySelector("#compteur") as HTMLButtonElement;
// const text = document.querySelector("span") as HTMLSpanElement;
// let value = 0;

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   value++;
//   text.innerHTML = value.toString();
// });
