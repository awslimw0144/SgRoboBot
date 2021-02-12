const world:string = "Hello my super new world";

function hello(word:string=world):string{
    return "Hello ${world}!"
}

export {
    hello
}