class Bird {
  tweet() {
    console.log("Tweet!");
  }
}

class BirdAdapter {
  constructor(bird) {
    this.bird = bird;
  }

  makeSound() {
    this.bird.tweet();
  }
}

module.exports = { Bird, BirdAdapter };
