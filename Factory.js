class AnimalFactory {
  createAnimal(type) {
    if (type === "dog") {
      return new Dog();
    } else if (type === "cat") {
      return new Cat();
    }
  }
}

class Dog {
  makeSound() {
    console.log("Woof!");
  }
}

class Cat {
  makeSound() {
    console.log("Meow!");
  }
}

module.exports = AnimalFactory;
