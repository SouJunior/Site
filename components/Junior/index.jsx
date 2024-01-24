import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./Junior.module.css";

import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";
import { Loading } from "../commons/Loading";
import Popup from "../commons/Popup/Popup";

import { api } from "../../services/api";

export const Junior = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const imageUrl = "/assets/popup.svg";

  const areasOption = [
    "Agilista",
    "APM - Produto",
    "Back-End",
    "Business",
    "Data",
    "Design de UX/UI",
    "DevOps",
    "Front-end",
    "Marketing",
    "Quality Assurance (QA)",
    "Scrum Master",
    "Tech Recruiter",
  ];

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const onSubmit = async (values, { resetForm }) => {
    setLoading(true);
    setIsSubmitting(true);

    const { confirmarEmail, ...data } = values;

    if (isSubmitting) {
      openPopup();
      setLoading(true);
      try {
        const response = await api.sendMailAdmin("/mail/collaborator", {
          subject: "Quero ser Junior",
          data: { ...data },
        });

        if (response.status !== 200) {
          throw new Error("Não foi possível enviar a requisição");
        }
        setPopupMessage("Obrigado por ajudar a SouJunior a crescer!");

        resetForm();
      } catch (error) {
        openPopup();
        setPopupMessage("Erro inesperado, tente novamente mais tarde");
      }
      setLoading(false);
    }
  };

  const handleClear = (resetForm) => {
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O campo Nome completo é obrigatório."),
    telefone: Yup.string().required("O campo Telefone é obrigatório."),
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
      .oneOf([...areasOption], "")
      .required("Escolha um opção por favor."),
    disponibilidade: Yup.string().required(
      "Por favor, assinale umas das opções pra prosseguir"
    ),
    mensagem: Yup.string().required("O campo Mensagem é obrigatório."),
    diasDaSemana: Yup.array()
    .of(Yup.string())
    .test('ao-menos-um-selecionado', 'Por favor, selecione pelo menos um dia da semana.', (value) => {
      return value && value.length > 0;
    }),
    periodo: Yup.array()
    .of(Yup.string())
    .test('ao-menos-um-selecionado', 'Por favor, selecione pelo menos um período.', (value) => {
      return value && value.length > 0;
    }),
  });

  return (
    <>
      <div className={styles.bannerContainer} id="junior">
        <img
          src="/assets/sou-junior-cover.svg"
          alt="Uma experiência real de trabalho em uma empresa de tecnologia."
        />
        <div className={styles.bannerText}>
          <Heading level={"h2"}>Quero ser Junior</Heading>
          <Paragraph>
            Para se candidatar como junior, preencha as informações abaixo.
          </Paragraph>
          <Paragraph>
            Nosso time entrará em contato para te conhecer um pouco mais e
            entender de que forma você poderá contribuir com os projetos e
            iniciativas da SouJunior.
          </Paragraph>
        </div>
      </div>

      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.form}>
            <Formik
              initialValues={{
                nome: "",
                telefone: "",
                email: "",
                linkedin: "",
                areas: "",
                disponibilidade: "",
                mensagem: "",
                diasDaSemana: "",
                periodo: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, values, resetForm }) => (
                <Form>
                  <div>
                    <label>Nome completo: *</label>
                    <Field
                      type="text"
                      name="nome"
                      maxLength={100}
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="nome"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>

                  <div>
                    <label>Telefone: *</label>
                    <Field
                      type="text"
                      name="telefone"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="telefone"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>E-mail: *</label>
                    <Field type="email" name="email" className={styles.input} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>Confirmar e-mail: *</label>
                    <Field
                      type="email"
                      name="confirmarEmail"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="confirmarEmail"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>Linkedin: *</label>
                    <Field
                      type="text"
                      name="linkedin"
                      className={styles.input}
                    />
                    <ErrorMessage
                      name="linkedin"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div
                    role="radioGroup"
                    id="radioGroup"
                    name="radioGroup"
                    className={styles}
                  >
                    <label>
                      Quanto tempo você tem disponível para atual na Sou Junior?
                      *
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Até 5 horas semanais"
                    >
                      <Field
                        className={styles.customOptions}
                        type="radio"
                        name="disponibilidade"
                        value="Até 5 horas semanais"
                        id="Até 5 horas semanais"
                        checked
                      />
                      Até 5 horas semanais
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="5 a 10 horas semanais"
                    >
                      <Field
                        className={styles.customOptions}
                        type="radio"
                        name="disponibilidade"
                        value="5 a 10 horas semanais"
                        id="5 a 10 horas semanais"
                      />
                      5 a 10 horas semanais
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="10 a 15 horas semanais"
                    >
                      <Field
                        className={styles.customOptions}
                        type="radio"
                        name="disponibilidade"
                        value="10 a 15 horas semanais"
                        id="10 a 15 horas semanais"
                      />
                      10 a 15 horas semanais
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Mais de 15 horas semanais"
                    >
                      <Field
                        className={styles.customOptions}
                        type="radio"
                        name="disponibilidade"
                        value="Mais de 15 horas semanais"
                        id="Mais de 15 horas semanais"
                      />
                      Mais de 15 horas semanais
                    </label>
                    <ErrorMessage
                      name="disponibilidade"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div
                    role="diasDaSemanaGroup"
                    id="diasDaSemanaGroup"
                    name="diasDaSemanaGroup"
                    className={styles}
                  >
                    <label>
                      Quais são os dias da semana em que você tem disponibilidade para atuar na Sou Junior?
                      *
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Segunda-feira"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="diasDaSemana"
                        value="Segunda-feira"
                        id="Segunda-feira"
                      />
                      Segunda-feira
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Terça-feira"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="diasDaSemana"
                        value="Terça-feira"
                        id="Terça-feira"
                      />
                      Terça-feira
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="diasDaSemana"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="diasDaSemana"
                        value="Quarta-feira"
                        id="Quarta-feira"
                      />
                      Quarta-feira
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Quinta-feira"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="diasDaSemana"
                        value="Quinta-feira"
                        id="Quinta-feira"
                      />
                      Quinta-feira
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Sexta-feira"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="diasDaSemana"
                        value="Sexta-feira"
                        id="Sexta-feira"
                      />
                      Sexta-feira
                    </label>
                    <ErrorMessage
                      name="diasDaSemana"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div
                    role="periodoGroup"
                    id="periodoGroup"
                    name="periodoGroup"
                    className={styles}
                  >
                    <label>
                      Qual é o período do dia em que você geralmente tem disponibilidade para atuar na Sou Junior?
                      *
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Matutino"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="periodo"
                        value="Matutino"
                        id="Matutino"
                      />
                      Matutino
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Vespertino"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="periodo"
                        value="Vespertino"
                        id="Vespertino"
                      />
                      Vespertino
                    </label>
                    <label
                      className={styles.optionsLabel}
                      htmlFor="Noturno"
                    >
                      <Field
                        className={styles.customOptions}
                        type="checkbox"
                        name="periodo"
                        value="Noturno"
                        id="Noturno"
                      />
                      Noturno
                    </label>
                    <ErrorMessage
                      name="periodo"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>
                      Qual das opções abaixo seria sua área de interesse? *
                    </label>
                    <Field as="select" name="areas" className={styles.select}>
                      <option
                        label="Selecione a área de atuação"
                        value=""
                        disabled
                      >
                        Selecione a área de atuação
                      </option>
                      {areasOption
                        .sort((a, b) => a - b)
                        .map((areaOption) => (
                          <option
                            label={areaOption}
                            value={areaOption}
                            key={areaOption}
                          >
                            {areaOption}
                          </option>
                        ))}
                    </Field>
                    <ErrorMessage
                      name="areas"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div>
                    <label>
                      Conte-me um pouco sobre o motivo que o(a) levou a escolher essa área de atuação. *
                    </label>
                    <Field
                      as="textarea"
                      name="mensagem"
                      maxLength={1500}
                      className={styles.textarea}
                      placeholder="Escreva sobre você aqui."
                    />
                    <span className={styles.count}>
                      Caracteres restantes: {1500 - values.mensagem.length}
                    </span>
                    {values.mensagem.length > 1500 && (
                      <span className={styles.count} style={{ color: "red" }}>
                        Limite de caracteres excedido.
                      </span>
                    )}
                    <ErrorMessage
                      name="mensagem"
                      component="div"
                      className={styles.errorMessage}
                    />
                  </div>
                  <div className={styles.buttons}>
                    <button type="submit">Enviar</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          {showPopup && (
            <Popup onClose={closePopup} imageUrl={imageUrl}>
              {loading && <Loading />}
              {!loading && popupMessage !== null && (
                <>
                  <Paragraph>{popupMessage}</Paragraph>
                </>
              )}
            </Popup>
          )}
        </div>
      </section>
    </>
  );
};
