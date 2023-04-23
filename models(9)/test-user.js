/* eslint-disable no-unused-vars */

const User = require("./User");

async function testFindAll() {
  const users = await User.findAll();
  console.log(users);

  // [[[TABLEAU D'ENTITÉ]]]

  // Astuce d'affichage 1
  const allRawUsers = await User.findAll({ raw: true });
  console.log(allRawUsers);

  // Astuce d'affichage 2
  const allRawUsers2 = await User.findAll();
  console.log(JSON.stringify(allRawUsers2, null, 2)); // ==> ✅


  // [[[ UNE SEULE ENTITE ]]]

  // Astuce d'affichage 1
  const user3 = await User.findByPk(3, { raw: true });
  console.log(user3);

  // Astuce d'affichage 2
  const user3bis = await User.findByPk(3);
  console.log(JSON.stringify(user3bis, null, 2));

  // Astuce d'affichage 3
  const user3bisbis = await User.findByPk(3);
  console.log(user3bisbis.toJSON()); // ==> ✅
}

async function testQueryComplexes() {
  // Pour récupérer certains champs, pas tous !
  const user = await User.findByPk(1, {
    attributes: ["firstname", "lastname"],
  });
  console.log(user.toJSON()); // Equivalent : SELECT "firstname", "lastname" FROM "user" WHERE id = 1;


  // Selectionner tous les users trié par ordre alphabétique sur leur lastname
  const users = await User.findAll({
    order: [["lastname", "ASC"]],
    // attributes: ["firstname", "lastname"] // Oui, on peut cumuler les options !
  });

  console.log(JSON.stringify(users, null, 2));

}

async function main() {
  // await testFindAll();
  await testQueryComplexes();
}

main();
