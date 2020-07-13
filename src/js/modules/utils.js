const utils = () => {
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  
    window.utils = {
      getRandomNumber: getRandomNumber
    }
};

export default utils;