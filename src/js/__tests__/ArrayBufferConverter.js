import ArrayBufferConverter from "../ArrayBufferConverter";
import getBuffer from "../app";


describe('Проверка класса ArrayBufferConverter', () => {  
  
  test('Проверка декодирования ArrayBuffer ', () => {
     let classCheck = new ArrayBufferConverter();
     const expectValue = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
     expect(classCheck.load(getBuffer())).toBe(expectValue);
   });

  
}); 
