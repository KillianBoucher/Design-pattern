class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify(data) {
      for (const observer of this.observers) {
        observer.update(data);
      }
    }
  }
  
  class Observer {
    update(data) {
      throw new Error('Méthode non implémentée');
    }
  }
  
  class ConcreteObserverA extends Observer {
    update(data) {
      console.log(`ConcreteObserverA a été notifié avec les données : ${data}`);
    }
  }
  
  class ConcreteObserverB extends Observer {
    update(data) {
      console.log(`ConcreteObserverB a été notifié avec les données : ${data}`);
    }
  }
  
  const subject = new Subject();
  
  const observerA = new ConcreteObserverA();
  const observerB = new ConcreteObserverB();
  
  subject.addObserver(observerA);
  subject.addObserver(observerB);
  
  subject.notify('Nouvelles données'); 
  // Affiche :
  // ConcreteObserverA a été notifié avec les données : Nouvelles données
  // ConcreteObserverB a été notifié avec les données : Nouvelles données
  