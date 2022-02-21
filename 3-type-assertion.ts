let message="Test";

let endWithT=message.endsWith("t");

console.log(message,endWithT);

let myMessage;

myMessage="Angular";

let endWithR=(<string>myMessage).endsWith("r");
console.log(myMessage,endWithR);

let endWithL=(myMessage as string).endsWith("l");
console.log(myMessage,endWithL);