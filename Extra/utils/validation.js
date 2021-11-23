import { validateEmail } from "./helpers";

export default function validateUser (users) {
    let ValidEmail =[];
    let ValidEmailcount = 0;
    let InvalidEmail =[];
    let InvalidEmailcount = 0;
    for(let char = 0; char < users.length; char++) {
        if (validateEmail(users[char])) {
            ValidEmailcount++;
            ValidEmail.push(users[char]);
        } 
        else {
            InvalidEmailcount++;
            InvalidEmail.push(users[char]);
        }
    }
    console.log('Valid Email :', ValidEmail);
    console.log('Invalid Email :',InvalidEmail);
    console.log('Valid Email count :',ValidEmailcount);
    console.log('Invalid Email count :',InvalidEmailcount);
}
