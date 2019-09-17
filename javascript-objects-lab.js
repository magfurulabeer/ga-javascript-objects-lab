/*
1. Syntax
List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! This list is finite.
*/


/*
2. Me
Create an empty object called me.

Assign it properties for name, age, and email with corresponding values. Afterward, logging the object should produce the following output:

{
    name: "Kristyn",
    age: 42,
    email: "kristyn@foo.bar"
}
Using dot notation, log only the name property in your object.

Using bracket notation, update the value of age to be 43 years old.

Using dot notation, console.log() age to verify that it has been updated.

Add a property to this object called "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.

Print the value of "place of residence".
*/
const me = {};
me.name = 'Magfurul Abeer'
me.age = 28
me.email = 'magfurulabeer@gmail.com'
console.log(me.name)
me['age'] = 43
console.log(me['age'])
me['place of residence'] = 'Staten Island, NY'
console.log(me['place of residence'])

/*
3. Slimer
Given the slimer object, do the following:

console.log() the name.
Change the type to 'creature'.
Add a property to the object called age, and set its value to 6.
console.log() the object to make sure type and age are what you want them to be.
Give the monster a method to introduce himself, interpolating some of his properties. Call the method.
*/
const monster = {
  name: "Slimer",
  color: "greenish",
  type: "plasm or ghost or something"
}

monster.type = 'creature'
monster.age = 6
console.log(monster)
monster.introduction = function() {
  console.log(`My name is ${this.name}. I am a ${this.age} year old ${this.type}.`)
}

monster.introduction();

/*
4. Ogres
Let's say you want to create an adventure in which an adventurer and an ogre fight each other.

Spend a few minutes reading this question a couple of times, thinking and pseudocoding before you actually write the code.

Write a small program that will simulate a battle between your adventurer and an ogre.

The battle should play out automatically.
The ogre and adventurer will take turns attacking each other, and statistics will be shown after each attack.
The ogre's attacks should have random damage value, but the adventurer should always attack with the same value.
Whenever someone's hitpoints go below zero, the other wins the battle.
Create objects and have them interact. Remember, you are modeling things from real life. Just like the characters you are modeling, your objects will have properties (qualities) and methods (things they can do).

How would you define your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
How would you define an ogre? Your ogre will want hitpoints, right?
How could you implement the "attack" functionalities? Should you do this by adding methods to the objects? Should those methods take parameters?
Use console.log() to show each attack, how many hitpoints the person being attacked loses, and the updated stats for the ogre and adventurer. At the end, log the winner.
You can use a loop to make the game play out. But what kind of loop? How and when will it stop?
Would it be helpful to create another object to control and keep track of other data that isn't specifically about the ogre or the adventurer? Such as a game object, perhaps?
Doing this efficiently requires planning. If you just started coding immediately without thinking through what you're trying to do and planning accordingly, then you're doing it wrong. Timewise, programming is 75–90% planning and 10–25% actually typing code.
*/

function ogreBattle(name) {
  const hero = {
    name,
    hp: 50,
    attack: function (enemy) {
      const damage = 5
      enemy.hp -= damage
      console.log(`${this.name} attacks ${enemy.name} for ${damage}`)
    }
  }

  const ogre = {
    name: 'Ogre',
    hp: 50,
    attack: function (enemy) {
      const damage = Math.floor(Math.random() * 10) + 1
      enemy.hp -= damage
      console.log(`${this.name} attacks ${enemy.name} for ${damage}`)
    }
  }

  const displayStatus = (opp1, opp2) => console.log(`${opp1.name}: ${opp1.hp} | ${opp2.name}: ${opp2.hp}`)

  while(hero.hp > 1 && ogre.hp > 1) {
    hero.attack(ogre)
    ogre.attack(hero)
    displayStatus(hero, ogre)
    console.log('')
  }

  const winner = ogre.hp < 1 ? hero : ogre
  console.log(`The winner is ${winner.name}`)
}

/*
Cat Combinator
1. Mama Cat
Define an object called cat1 that contains the following properties:

Name
Breed
Age (a number)
console.log() the cat's age.

console.log() the cat's breed.

2. Papa Cat
Define an object called cat2 that also contains the properties:
Name
Breed
Age (a number)
3. Combine Cats!
The cats are multiplying!

Write a function, combineCats(), that has two parameters: mama and papa. The function will take two arguments; each a cat object.
*/
const halfHead = (str) => str.slice(0, str.length / 2);
const halfTail = (str) => str.slice(str.length / 2);

const cat1 = { name: "Mittens", age: 9, breed: "Tabby" }
const cat2 = { name: "Fluffy", age: 8, breed: "Siamese" }
function combineCats (cat1, cat2) {
  return {
    name: halfHead(cat1.name) + halfTail(cat2.name),
    age: 1,
    breed: cat1.breed === cat2.breed ? cat1.breed : `${cat1.breed}-${cat2.breed}`
  }
}

console.log(combineCats(cat1, cat2));

const a = combineCats(cat1, cat2);
const b = combineCats({ name: "Apollo", age: 5, breed: "Shorthair" }, { name: "Venus", age: 10, breed: "Ragdoll" });
console.log(combineCats(a, b))

// Does not account for multiples when more than 2 breeds ex. Tabby-Shorthair-Tabby-Ragdoll