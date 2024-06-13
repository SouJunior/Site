import * as Yup from "yup";

export const areasOption = [
    {
      name: "Produto",
      value: "product",
      sub: [
        {
          name: "Product Growth",
          value: "productGrowth",
        },
        {
          name: "Product OPS",
          value: "productOps",
        },
        {
          name: "Product Marketing Manager",
          value: "productMarketingManager",
        },
        {
          name: "Social Media",
          value: "socialMedia",
        },
        {
          name: "APM - Associate Product Manager",
          value: "apm",
        },
      ],
    },
    {
      name: "Design",
      value: "design",
      sub: [
        {
          name: "UX/UI",
          value: "uxui",
        },
        {
          name: "Design OPS",
          value: "designOps",
        }
      ],
    },
    {
      name: "Agilidade",
      value: "agility"
    },
    {
      name: "Back-end",
      value: "back"
    },
    {
      name: "Front-end",
      value: "front"
    },
    {
      name: "Dados",
      value: "data"
    },
    {
      name: "QA - Quality Assurance",
      value: "qa"
    },
    {
      name: "DevOps",
      value: "devops"
    }
];

export const getValidationSchema = (hasSubareas, requiresDate) => {
  return Yup.object().shape({
    nome: Yup.string()
      .min(3, "O campo Nome precisa ter no mínimo 3 caracteres.")
      .required("O campo Nome completo é obrigatório."),
    email: Yup.string()
      .email("E-mail inválido.")
      .required("O campo E-mail é obrigatório."),
    confirmarEmail: Yup.string()
      .oneOf([Yup.ref("email")], "O email deve ser o mesmo")
      .required("O campo Confirmar e-mail é obrigatório."),
    linkedin: Yup.string()
      .url("Link inválido.")
      .required("O campo Linkedin é obrigatório."),
    areas: Yup.string()
      .required("* Escolha um opção por favor."),
    subarea: hasSubareas
      ? Yup.string().required("* Escolha uma subárea por favor.")
      : Yup.string().nullable(),
    disponibilidade: Yup.string()
      .required("Por favor assinale umas das opções pra prosseguir"),
    inicioDate: requiresDate
      ? Yup.date().required("Por favor, escolha uma data.")
      : Yup.date().nullable(),
    toolsKnowledge: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
    fieldKnowledge: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
    volunteerMotivation: Yup.string()
      .min(200, "O campo deve ter no mínimo 200 caracteres.")
      .max(500, "O campo deve ter no máximo 500 caracteres.")
      .required("O campo é obrigatório."),
      infos: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
      terms: Yup.boolean().oneOf([true], "Você deve marcar esta opção."),
  });
};

export const initialValues = {
  nome: "",
  email: "",
  confirmarEmail: "",
  linkedin: "",
  areas: "",
  subarea: "",
  disponibilidade: "Até 5 horas semanais",
  turno: "turno-disponivel",
  inicioDate: "",
  toolsKnowledge: "",
  fieldKnowledge: "",
  volunteerMotivation: "",
  infos: false,
  terms: false
}