import mock from '../utils/mock';

<<<<<<< HEAD
mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    //name: 'Jessica Coelho',
    username: 'jessiaConceicao',
    email: 'jessicacoelho@conceicao.com.br',
    avatar: '/public/images/Avatars/Avatar3.png',
 }
});


mock.onPost('api/home/login').reply((config) => {

  const{email, password} =JSON.parse(config.data);

  if (email !== 'jessicacoelho@conceicao.com.br' || password !== 'admin') {
    return [400, { message: 'Seu e-mail ou senha estão incorretos' }];
  }

  const user = {
    id: 1,
    name: 'Jessica Coelho',
    username: 'jessiaConceica',
    email: 'jessicacoelho@conceicao.com.br',
    avatar: '/images/Avatars/Avatar3.png',
=======
//mock.onPost('/api/home/me').reply(200, {
  //user: {
   // id: 1,
   // name: 'Jessica Coelho',
   // username: 'jessiaConceicao',
    //email: 'jessicacoelho@conceicao.com.br',
    //avatar: '/public/images/Avatars/Avatar3.png',
 // },
//});


mock.onPost('api/home/login').reply((config) => {
  console.log(config)
  const{email, password} =JSON.parse(config.data);

  if (email !== 'jessicacoelho@conceicao.com.br' || password !== 'admin') {
    return [400, { message: 'Seu e-mail ou senha estão incorretos' }];
  }

  const user = {
    id: 1,
    name: 'Jessica Coelho',
    username: 'jessiaConceica',
    email: 'jessicacoelho@conceicao.com.br',
    avatar: '/public/images/Avatars/Avatar3.png',
>>>>>>> 2d2cfa60132015f98666131d9f6817a601d3b0ba
  };

  return [200, {user}]
});




//mock.onGet('/api/home/user/jessicaConceicao').reply(200, {
  //id: 1,
  //name: 'Jessica Coelho x',
  //username: 'jessicaConceicao',
  //email: 'email@conectadev.com',
  //accessToken: 'dadadadadadadad',
  //avatar: '/public/images/Avatars/Avatar3.png',
  //joinedIn: '06 de janeiro, 2020',
  //work: 'Arquiteto de Software',
  //totalPost: '388',
//}); 
