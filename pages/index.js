import Cards from "@/components/Cards";
import CardsAI from "@/components/CardsAI";
import SendData from "@/components/SendData";
function walkDog() {
  return new Promise((resolve, reject) => {
    //resolve and reject are functions that return a value
    setTimeout(() => {
      const DogWalked = true;
      if (DogWalked) {
        resolve("You walked the dog!"); //when the promise is resolved it will return this value
      } else {
        reject("You didn't walked the dog!");
      }
    }, 1500); //takes 1500 milliseconds to run this
  });
}
function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const KitchenCleaned = true;
      if (KitchenCleaned) {
        resolve("You clean the kitchen!");
      } else {
        reject("You didn't clean the kitchen!");
      }
    }, 2500);
  });
}
function trashOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const TrashTakenOut = true;
      if (TrashTakenOut) {
        resolve("You take out the trash!");
      } else {
        reject("You didn't take out the trash!");
      }
    }, 500);
  });
}
//by using async/await
async function doChores() {
  try {
    const DogWalkResult = await walkDog();
    console.log(DogWalkResult);
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    const trashOutResult = await trashOut();
    console.log(trashOutResult);
    console.log("You finished all the chores ");
  } catch (error) {
    console.error(error);
  }
}
//doChores();
//by using promise
/* walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return trashOut();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores");
  })
  .catch((error)=>{
    console.error(error)
  }) */

export default function Home() {
  return (
    <>
      <div className="p-3 ">
        <Cards />
      </div>
    </>
  );
}
