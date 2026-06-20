/* ============================================================
   PetNexus - configuracao Web do Firebase (LOGIN)
   ESTA e a configuracao PUBLICA do app web (pode ficar no
   navegador). NAO confunda com a "service account" (admin/
   private_key), que e SECRETA e nunca vai para o front-end.

   Onde pegar: Firebase Console -> Configuracoes do projeto
   -> Seus apps -> App da Web -> "Configuracao do SDK".
   Cole os valores abaixo (apiKey, appId, etc.).
   ============================================================ */
window.PETNEXUS_FIREBASE = {
  apiKey: "PREENCHA_COM_A_WEB_API_KEY",
  authDomain: "garden-backup.firebaseapp.com",
  projectId: "garden-backup",
  storageBucket: "garden-backup.appspot.com",
  messagingSenderId: "PREENCHA",
  appId: "PREENCHA"
};
