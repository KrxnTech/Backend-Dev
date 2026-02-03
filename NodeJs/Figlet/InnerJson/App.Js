import figlet from "figlet";

async function doStuff() {
    const text = await figlet.text("Hello Node!!");
    console.log(text);
}

doStuff();