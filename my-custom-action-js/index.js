const core = require('@actions/core');

try {
    // Lire les entrées fournies par l'utilisateur
    const username = core.getInput('name');

        const message = Hello + `${username}!`;

          // Afficher le message dans les logs
    console.log(message);

    // Définir une sortie pour l'action
    core.setOutput("message", message);
} catch (error) {
    core.setFailed(`Une erreur est survenue : ${error.message}`);
}
