import React from "react";
import CardLink from "../CardLink";

export const AdminQuickAccessSection = () => {
  //Mock links
  const items = [
    { title: "Dashboard" },
    { title: "Site" },
    { title: "Meus Dados" },
    { title: "Reportar Problema" },
    { title: "Mentorias" },
    { title: "Vagas" },
  ];

  return (
    <section className="flex flex-col gap-3 items-center p-16 ">
      <div className="w-full max-w-7xl">
        <h3 className="self-start font-bold text-2xl text-primary pb-3">
          Acessos recentes
        </h3>

        <div className="flex items-center justify-center gap-8 lg:gap-y-12 flex-wrap lg:justify-between">
          {items.map(({ title }) => (
            <CardLink.Body key={title}>
              <CardLink.Icon>
                <img src="../assets/icons/history-icon.svg" />
              </CardLink.Icon>
              <CardLink.Content>{title}</CardLink.Content>
            </CardLink.Body>
          ))}
        </div>
      </div>
    </section>
  );
};
