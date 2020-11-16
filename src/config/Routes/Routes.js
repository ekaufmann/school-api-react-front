import Administrador from "../../components/Administrador/Administrador";
import Aluno from "../../components/Aluno";
import Home from "../../components/Home";
import Mentor from "../../components/Mentor";

import AdmAlunoView from "../../components/Administrador/adm-aluno/";

export const ROUTES = [
  { title: 'Home', path: '/', component: Home },
  { title: 'Aluno', path: '/aluno', component: Aluno },
  { title: 'Mentor', path: '/mentor', component: Mentor },
  { title: 'Administrador', path: '/adm', component: Administrador },
];

export const ROUTES_ADM = [
  { title: 'Alunos', path: '/adm/alunos', component: AdmAlunoView},
  { title: 'Mentores', path: '/adm/mentores', component: 'c'},
  { title: 'Mentorias', path: '/adm/mentorias', component: 'c'},
  { title: 'Programas', path: '/adm/programas', component: 'c'},
  { title: 'Disciplinas', path: '/adm/disciplinas', component: 'c'},
  { title: 'Avaliações', path: '/adm/avaliacoes', component: 'c'},
];

export const ROUTES_ADM_ALUNO = [

];