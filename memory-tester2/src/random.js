import {Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10} from "./Image.jsx"
//generates random image

const randomImage = {
    images: [Img1(), Img2(), Img3(), Img4(), Img5(), Img6(), Img7(), Img8(), Img9(), Img10()],
    storageArr: [],
    indexArr: [],
    count: 0,

    //generates random index
    createRandom: () => {
        return Math.floor(Math.random() * 10);
    },

    //pushes random index and value to respective arrays
    pushToArrays: (value) => {
        storageArr.push(letters[value]);
        indexArr.push(value);
    },

    //pushes first value to arrays
    pushFirstValue: () => {
        const firstValue = createRandom();
        pushToArrays(firstValue);
        count++;
    },
        //pushes values after the first push
    pushAddValues: () => {
      do{
          const newValue = createRandom();
          !indexArr.includes(newValue) ? pushToArrays(newValue): "";
          count++;
      } while (count < 5);
    
    //removes duplicates
      const adjustedStorage = removeDuplicates(storageArr);
      storageArr = [...adjustedStorage];
      const adjustedIndexArr = removeDuplicates(indexArr);
      indexArr = [...adjustedIndexArr];
    },

    init: () => {
        pushFirstValue();
        pushAddValues();
        adjustLength();
        console.log(storageArr);
    },
    
    adjustLength: () => {
        do{
          pushAddValues();
        } while (storageArr.length < 4);
    },
};

export {init, storageArr};

