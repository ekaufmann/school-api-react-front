import Administrador from "../../pages/Administrador/Administrador";
import Aluno from "../../pages/Aluno";
import Home from "../../pages/Home";
import Mentor from "../../pages/Mentor";

import AdmAlunoView from "../../pages/Administrador/aluno/AdmAlunoView";

export const ROUTES = [
  { title: 'Home', path: '/', component: Home },
  { title: 'Aluno', path: '/aluno', component: Aluno },
  { title: 'Mentor', path: '/mentor', component: Mentor },
  { title: 'Administrador', path: '/adm', component: Administrador },
];

export const ROUTES_ADM = [
  { title: 'Alunos', path: '/adm/aluno', component: AdmAlunoView},
  { title: 'Mentores', path: '/adm/mentore', component: 'c'},
  { title: 'Mentorias', path: '/adm/mentoria', component: 'c'},
  { title: 'Programas', path: '/adm/programa', component: 'c'},
  { title: 'Disciplinas', path: '/adm/disciplina', component: 'c'},
  { title: 'Avaliações', path: '/adm/avaliacao', component: 'c'},
];

export const ROUTES_ADM_ALUNO = [

];