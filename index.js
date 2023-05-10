const AnimalFactory = require("factory");
const { Subject, Observer } = require("observer");
const { Bird, BirdAdapter } = require("adapter");

// Factory
const factory = new AnimalFactory();
const dog = factory.createAnimal("dog");
const cat = factory.createAnimal("cat");

dog.makeSound(); // Woof!
cat.makeSound(); // Meow!

// Observer
const subject = new Subject();
const observer = new Observer();
subject.addObserver(observer);
subject.notify("New state");

// Adapter
const bird = new Bird();
const birdAdapter = new BirdAdapter(bird);
birdAdapter.makeSound(); // Tweet!
