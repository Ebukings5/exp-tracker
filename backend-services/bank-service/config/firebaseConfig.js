const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVIICE_ACCOUNT_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;