let trashGotTakenOut = false;

const takeOutTheTrash = new Promise((resolve, reject) => {

    if(trashGotTakenOut){
        resolve("Thanks for taking out the trash")
    }
    else{
        reject("You didn't take out the trash")
    }
})

takeOutTheTrash
 .then(message => console.log(message))
 .catch(err => console.log(err))