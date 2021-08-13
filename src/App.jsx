import React from "react";
import { Switch, Route } from "react-router-dom";
import Tab from "./layout/Tab";
import BoxChat from "./layout/BoxChat";
import FormWhatsapp from "./layout/FormWhatsapp";
import FormTelegram from "./layout/FormTelegram";
import PersonIsx from "./component/PersonIsx";
import Article from "./component/Article";

import icon_wa from "../assets/icons/icon-whatsapp.svg";
import icon_telegram from "../assets/icons/icon-telegram.svg";
import "./App.css";

function App() {
  const data_tab = [
    {
      label: "Whatsapp",
      imagesrc: icon_wa,
      url: "/",
    },
    {
      label: "Telegram",
      url: "/telegram",
      imagesrc: icon_telegram,
    },
  ];

  const article_telegram = {
      title: "Temukan Akun dan Mulai Percakapan di Telegram",
      metadesc: "Memulai percakapan di Telegram tanpa harus menyimpan dan dengan fitur editor yang tampil simple dan mudah digunakan",
      desc: "<p>Noneedsave merupakan tempat bagi anda untuk memulai percakapan di Telegram tanpa harus menyimpan dan dengan fitur editor yang tampil simple dan mudah digunakan.</p><p>Tidak perlu lagi menyimpan kontak seseorang untuk memulai percakapan, cocok banget dengan kamu yang gak mau repot menyimpan nomor kurir, klien, pelanggan dll untuk lansung memulai percakapan.</p>",
  }

  const article_whatsapp = {
    title: "Mulai Percakapan di Whatsapp",
    metadesc: "Memulai percakapan di Whatsapp tanpa harus menyimpan dan dengan fitur editor yang tampil simple dan mudah digunakan",
    desc: "<p>Noneedsave merupakan tempat bagi anda untuk memulai percakapan di Whatsapp tanpa harus menyimpan dan dengan fitur editor yang tampil simple dan mudah digunakan.</p><p>Tidak perlu lagi menyimpan kontak seseorang untuk memulai percakapan, cocok banget dengan kamu yang gak mau repot menyimpan nomor kurir, klien, pelanggan dll untuk lansung memulai percakapan.</p>"
  }

  return (
    <div className="page page-homepage">
      <div className="tab-content-wrapper">
        <Tab items={data_tab} />
        <Switch>
          <Route path="/telegram">
            <PersonIsx color="blue" />
            <BoxChat title="Telegram">
              <FormTelegram />
            </BoxChat>
            <Article content={article_telegram} />
          </Route>
          <Route path="/">
            <PersonIsx color="green" />
            <BoxChat title="Whatsapp">
              <FormWhatsapp />
            </BoxChat>
            <Article content={article_whatsapp} />
          </Route>
        </Switch>        
      </div>
    </div>
  );
}

export default App;
