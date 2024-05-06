import React from "react";
import { SiGoogleforms } from "react-icons/si";
import { BsCardChecklist } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { IoPrintOutline } from "react-icons/io5";
import { GrFormFolder } from "react-icons/gr";
import { AiOutlineForm } from "react-icons/ai";/*AiOutlineForm   {
  title: "Imprimer_fiche",
  path: "/imprimer3",
  icon: <IoPrintOutline className="iconfiche" />,
  cName: "datafiche",
},*/
import { VscSymbolKeyword } from "react-icons/vsc";
import { FiFolderPlus } from "react-icons/fi";
import { VscCopy } from "react-icons/vsc";
/*import { FiFolderMinus } from "react-icons/fi"FiFolderMinus boton eli tfasa5 ficha */
export const Datafiche1 = [
  {
    title: "Fiches",
    path: "/fiche",
    icon: <SiGoogleforms  className="iconfiche" />,
    cName: "sidedata",
  },
  {
    title: "Remplir_fiche",
    path: "/Remplir",
    icon: <TfiWrite  className="iconfiche"/>,
    cName: "sidedata",
  },
  {
    title: "Listes_des_fiches_remplie",
    path: "/Listefichesremplie",
    icon: <BsCardChecklist className="iconfiche"/>,
    cName: "sidedata",
  },
  {
    title: "Consulter_les_fiches",
    path: "/consulter",
    icon: <VscSymbolKeyword className="iconfiche"/>,
    cName: "sidedata",
  },
  {
    title: "Ajouter_nouvelle_fiche",
    path: "/Ajouter-fiche",
    icon: <FiFolderPlus className="iconfiche"/>,
    cName: "sidedata",
  },

  {
    title: "Listes_des_fiches",
    path: "/Listedesfiches",
    icon: < VscCopy  className="iconfiche" />,
    cName: "sidedata",
  },


];