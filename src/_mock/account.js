const nom = localStorage.getItem('nom');
const prenom = localStorage.getItem('prenom');
const mail = localStorage.getItem('email');

export const account = {
  displayName: nom + prenom,
  email: mail,
  photoURL: '/assets/images/avatars/avatar_25.jpg',
};
