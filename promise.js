const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emotion) => {
  
    const ixx = await promiseTheaterIXX();
    const vgc = await promiseTheaterVGC();

    let marah = 0;
    let tidak_marah = 0;
      
      for(let i in ixx){
        if(ixx[i].hasil == "marah"){
          marah++;
        }else if(ixx[i].hasil == "tidak marah"){
          tidak_marah++;
        }
      } 
      
      for(let i in vgc){
        if(vgc[i].hasil == "marah"){
          marah++;
        }else if(vgc[i].hasil == "tidak marah"){
          tidak_marah++;
        }
      } 
      
    return new Promise((resolve) => {
      if(emotion == "marah"){
        return resolve(marah);
      }else if(emotion == "tidak marah"){
        return resolve(tidak_marah);
      }
    })
};

module.exports = {
  promiseOutput,
};
