import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  
  let pipe:GradePipe;

  beforeEach(() => {
    pipe = new GradePipe();
  });

  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

   // 2. Test Pipe class method
   it('should return "outstanding" when input is  "1" ', () => {
    const result:string  = pipe.transform(1);
    expect(result).toBe("Outstanding");
  });
  it('should return "Excellent" when input is  "2" ', () => {
    const result:string  = pipe.transform(2);
    expect(result).toBe("Excellent");
  });
  it('should return "Good" when input is  "3" ', () => {
    const result:string  = pipe.transform(3);
    expect(result).toBe("Good");
  });
  it('should return "Average" when input is  "4" ', () => {
    const result:string  = pipe.transform(4);
    expect(result).toBe("Average");
  });
  it('should return empty when input is invalid grade', () => {
    const result:string  = pipe.transform("hello");
    expect(result).toBe("");
  });


});
