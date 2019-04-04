class Burguer {
  public name: string;
  public bread: string = 'normal';
  public lettuce: number = 0;
  public bacon: number = 0;
  public meatType: string = 'normal';

  constructor(options: any) {
    if (typeof options === 'string') {
      this.name = options;
    } else {
      this.bread = options.bread;
      this.lettuce = options.lettuce;
      this.bacon = options.bacon;
      this.meatType = options.meatType;
      this.name = options.name;
    }
  }
  
  public get burguerName() : string {
    return this.name;
  }
  
  static get Builder() {
    class Builder extends Burguer {
      constuctor() {
        this.name = this.burguerName;
      }

      withBread(bread: string) {
        this.bread = bread;
        return this;
      }

      withLettuce(lettuce: number) {
        this.lettuce = lettuce;
        return this;
      }

      withBacon(bacon: number) {
        this.bacon = bacon;
        return this;
      }

      withMeatType(meatType: string) {
        this.meatType = meatType;
        return this;
      }

      build() {
        return new Burguer(this);
      }
    }
    return Builder;
  }
}

const texanWithBuilder = new Burguer.Builder('Texan')
  .withBacon(10)
  .withBread('white')
  .withLettuce(3)
  .withMeatType('big')
  .build();
console.log(texanWithBuilder);