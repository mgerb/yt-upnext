class Player {
  private playerElement: any;

  constructor() {
    this.playerElement = document.getElementsByTagName('video')[0];
  }

  // player event listeners https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
  public startListeners(): void {
    if (!this.playerElement) {
      return;
    }

    // event listener for when video ends
    this.playerElement.addEventListener('ended', this.endedListener.bind(this));
  }

  private endedListener(): void {
    console.dir(this.playerElement);
    console.log('ended');
  }
}

export default new Player();
