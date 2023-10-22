// function one() {
//   return 1;
// }

// const { Promise } = require("mongoose");

// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

//Callback Hell

// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveToDb(
//   "apna college",
//   () => {
//     console.log("Success: your data was saved");
//     saveToDb(
//       "hello world",
//       () => {
//         console.log("Succes2: Your data was saved");
//         saveToDb(
//           "Nice ",
//           () => {
//             console.log("Success3: Data was saved");
//           },
//           () => {
//             console.log("Not saved");
//           }
//         );
//       },
//       () => {
//         console.log("Not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Not saved");
//   }
// );

//PRomises

function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : data was saved");
    } else {
      resolve("faliure : weak connection");
    }
  });
}

//ttypes of object then & catch

let request = saveToDb("Apna college");
request
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("Not successfull");
  });
