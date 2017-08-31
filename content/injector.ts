class Injector {

  constructor() {
    console.log('injector');
  }

  public injectElements(): void {
    console.log('Injection started');
  }
}

export default new Injector();
