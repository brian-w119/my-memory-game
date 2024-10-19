import {
   Img1,
   Img2,
   Img3,
   Img4,
   Img5,
   Img6,
   Img7,
   Img8,
   Img9,
   Img10,
   Img11,
   Img12,
   Img13,
   Img14,
   Img15,
   Img16,
   Img17,
   Img18,
   Img19,
   Img20,
} from "./Image.jsx";

let images = [
   Img1,
   Img2,
   Img3,
   Img4,
   Img5,
   Img6,
   Img7,
   Img8,
   Img9,
   Img10,
   Img11,
   Img12,
   Img13,
   Img14,
   Img15,
   Img16,
   Img17,
   Img18,
   Img19,
   Img20,
];
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;

let storageArr = [];
let indexArr = [];
let count = 0;

//generates random image
function createRandom() {
   return Math.floor(Math.random() * 20);
}

function pushToArrays(value) {
   storageArr.push(images[value]);
   indexArr.push(value);
}

function pushFirstValue() {
   const firstValue = createRandom();
   pushToArrays(firstValue);
   count++;
}

//pushes values after the first push
function pushAddValues() {
   do {
      const newValue = createRandom();
      !indexArr.includes(newValue) ? pushToArrays(newValue) : "";
      count++;
      console.log(`count:  ${count}`);
   } while (count < 10);

   //removing duplicates
   const adjustedStorage = removeDuplicates(storageArr);
   storageArr = [...adjustedStorage];
   const adjustedIndexArr = removeDuplicates(indexArr);
   indexArr = [...adjustedIndexArr];
}

function removeDuplicates(arr) {
   return [...new Set(arr)];
}

function destructureImg(arr) {
   [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10] = [...arr];
}

export default function initateRandom() {
   pushFirstValue();
   pushAddValues();
   adjustLength();
   destructureImg(storageArr);
   return [storageArr];
}

function adjustLength() {
   do {
      pushAddValues();
   } while (storageArr.length < 10);
}

function reShuffle() {
   count = 0;
   indexArr = [];
   storageArr = [];
   // createRandom();
   //pushToArrays();
   //pushFirstValue();
   initateRandom();
}

export {
   img1,
   img2,
   img3,
   img4,
   img5,
   img6,
   img7,
   img8,
   img9,
   img10,
   reShuffle,
};
