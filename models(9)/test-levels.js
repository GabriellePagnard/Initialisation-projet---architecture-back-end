const Level = require("./Level");

async function main() {

  // ===== FIND ALL =====
  const levels = await Level.findAll(/* { raw: true } */); // On rajoute le raw: true si besoin d'observer les données brutes
  console.log(levels);
  console.log(levels[0].name);

  // ===== CREATION ======
  const hardcoreLevel = new Level({ name: "Hardcore" });
  await hardcoreLevel.save(); // "save" est notre nouveau "insert" + "update"

  // D'autres façon de faire (un peu moins active record)
  const legendaryLevel = await Level.create({ name: "Legendary" }); // équivalent des deux lignes précédente en 1
  console.log(legendaryLevel);

  // ==== FIND BY PK ====
  const expertTag = await Level.findByPk(3);
  console.log(expertTag);

  // ==== SELECT BY NAME + DESTROY ====

  const levelToDestroy = await Level.findOne({ // En se plaçant dans l'objet et en tapant CTRL + ESPACE (window) // CONTROL + ESPACE (mac) on ouvre les suggestions
    where: { name: "Legendary" }
  });

  await levelToDestroy.destroy();
}

main();

// Par défaut, Sequelize considère que les modèles ont les champs
// `createdAt`
// `updatedAt`

// Il faut dire à Sequelize que nos champs ne s'appellent pas comme ça !!

