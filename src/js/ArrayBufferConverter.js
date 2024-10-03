export default class ArrayBufferConverter{
  load(buffer){
    const bufferView = new Uint16Array(buffer);
    let result = []
    for (let i = 0; i < bufferView.length; i++) {
      result.push(String.fromCharCode(bufferView[i]));
    }
    return result.join('');
  }  
}

