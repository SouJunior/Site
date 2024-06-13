import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdAdd, IoMdClose } from "react-icons/io";

import styles from "./Participation.module.css";
import { headers } from "../../utils/headers";
import { Heading } from "../commons/Heading";
import { Paragraph } from "../commons/Paragraph";

export const ParticipationSection = () => {
  const [textJr, setTextJr] = useState(false);
  const [textMentor, setTextMentor] = useState(false);
  const [textSupporter, setTextSupporter] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);

  return (
    <>
      <div className={styles.headerContainer} id="participation">
        <Heading level={"h1"}>
          Faça você também parte da nossa comunidade!
        </Heading>
        <div className={styles.headers}>
          {headers
            .filter((header) => header.id <= 9)
            .map(({ id, img }) => (
              <div key={id} className={styles.headersImg}>
                <Image
                  src={img}
                  width={150}
                  height={150}
                  className={styles.image}
                />
              </div>
            ))}
        </div>
      </div>
      <section className={styles.ParticipationSection} id={"participar"}>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <Paragraph>
              Na SouJunior, há diversas maneiras de participar:
            </Paragraph>

            <Paragraph>
              Como juniores ou mentores, ajudando diretamente na construção do
              projeto
            </Paragraph>
            <Paragraph>
              Como apoiadores ajudando com a divulgação, recrutamento e
              patrocínio, por exemplo.
            </Paragraph>

            <Paragraph>
              Clique nas categorias ao lado para saber mais.
            </Paragraph>
          </div>

          <div className={styles.rightSide}>
            <div className={textJr ? styles.textJr : styles.hide}>
              <button
                className={styles.btnCross}
                onClick={() => setTextJr(!textJr) && setIcon(IoMdClose)}
              >
                {textJr ? <IoMdClose /> : <IoMdAdd />}
                <Heading level={"h3"}>Sou Júnior</Heading>
              </button>

              {textJr && (
                <>
                  <div className={styles.ParagraphWrapper}>
                    <Paragraph>
                      A SouJunior oferece uma oportunidade para pessoas
                      interessadas em trabalhar na área de tecnologia, mas que
                      ainda não têm experiência suficiente.
                    </Paragraph>

                    <Paragraph>
                      Os candidatos podem se inscrever através de um formulário.
                    </Paragraph>
                    <Paragraph>
                      As informações dos candidatos serão avaliadas quando
                      houver vagas disponíveis para a área de interesse e o
                      candidato será contatado para seguir o processo.
                    </Paragraph>

                    <button className={styles.button}>
                      <a href="/seja-junior">Quero Participar!</a>
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className={textMentor ? styles.textMentor : styles.hide}>
              <button
                className={styles.btnCross}
                onClick={() => setTextMentor(!textMentor) && setIcon(IoMdClose)}
              >
                {textMentor ? <IoMdClose /> : <IoMdAdd />}
                <Heading level={"h3"}>Sou Mentor</Heading>
              </button>

              {textMentor && (
                <>
                  <div className={styles.ParagraphWrapper}>
                    <Paragraph>
                      A SouJunior busca profissionais atuantes no mercado de
                      trabalho há pelo menos 6 meses para atuar como mentores.
                    </Paragraph>
                    <Paragraph>
                      Os interessados devem preencher o formulário de inscrição
                      e serão contatados quando houver demanda na área de
                      atuação.”
                    </Paragraph>
                    <button className={styles.button}>
                      <Link href="/seja-mentor">Quero Participar!</Link>
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className={textSupporter ? styles.textSupporter : styles.hide}>
              <button
                className={styles.btnCross}
                onClick={() =>
                  setTextSupporter(!textSupporter) && setIcon(IoMdClose)
                }
              >
                {textSupporter ? <IoMdClose /> : <IoMdAdd />}
                <Heading level={"h3"}>Sou Apoiador</Heading>
              </button>

              {textSupporter && (
                <>
                  <div className={styles.ParagraphWrapper}>
                    <Paragraph>
                      A SouJunior busca pessoas interessadas em contribuir para
                      o projeto de alguma forma, incluindo financiadores da
                      iniciativa, divulgadores com canais no YouTube, podcast ou
                      blog sobre tecnologia, especialistas dispostos a palestrar
                      para profissionais Juniores de tecnologia, recrutadores e
                      empresas que desejam contratar.
                    </Paragraph>
                    <Paragraph>
                      Interessados devem se inscrever através do formulário e,
                      posteriormente, contatados pela equipe responsável.
                    </Paragraph>

                    <button className={styles.button}>
                      <a href="/apoiar" rel="noopener noreferrer">
                        Quero Participar!
                      </a>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
