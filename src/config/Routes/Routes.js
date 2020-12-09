import Administrador from "../../pages/Administrador/Administrador";
//import Home from "../../pages/Home";

import AdmAlunoView from "../../pages/Administrador/aluno/AdmAlunoView";
import AdmAvaliacaoView from "../../pages/Administrador/avaliacoes/AdmAvaliacaoView";
import AdmDisciplinaView from "../../pages/Administrador/disciplinas";
import AdmMentorView from "../../pages/Administrador/mentor/AdmMentorView";
import AdmMentoriaView from "../../pages/Administrador/mentorias/AdmMentoriaView";
import AdmProgramaView from "../../pages/Administrador/programas/AdmProgramaView";


export const ROUTES = [
  { title: 'Home', path: '/', component: Administrador },
  { title: 'Administrador', path: '/adm', component: Administrador },
];

export const ROUTES_ADM = [
  { title: 'Alunos', path: '/adm/aluno', component: AdmAlunoView},
  { title: 'Mentores', path: '/adm/mentor', component: AdmMentorView},
  { title: 'Mentorias', path: '/adm/mentoria', component: AdmMentoriaView},
  { title: 'Programas', path: '/adm/programa', component: AdmProgramaView},
  { title: 'Disciplinas', path: '/adm/disciplina', component: AdmDisciplinaView},
  { title: 'Avaliações', path: '/adm/avaliacao', component: AdmAvaliacaoView},
];