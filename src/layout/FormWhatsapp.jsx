import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import FieldValidate from '../component/FieldValidate';

import RiBold from 'virtual:vite-icons/ri/bold';
import RiItalic from 'virtual:vite-icons/ri/italic';
import RiFontSize from 'virtual:vite-icons/ri/font-size';
import RiStrikethrough from 'virtual:vite-icons/ri/strikethrough';

import phoneCode from "../data/phone-code.json";

import "./Form.css";

function FormWhatsapp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitWhatsapp = (data) => {
    console.log(data);
    window.open(`https://wa.me/${data.phonecode_field}${data.tel_field}/?text=${data.message_field}`, '_blank')
    return false;
  };

  let err_label = "Isi nomor telepon whatsapp.";
  let err_type = "error";

  if(errors.tel_field?.type === "minLength") {
    err_label = "Periksa jumlah digit nomor telepon whatsapp.";
    err_type = "warn";
  }

  const [elMessage, setElMessage] = useState([]);
  const [message, setMessage] = useState("");
  
  const toolbarAction = (e, wrap) => {
    e.preventDefault();
    let messageValue = elMessage.value;
    let messageSelectStart = elMessage.selectionStart;
    let messageSelectEnd = elMessage.selectionEnd;

    let messageSelected = messageValue.substring(messageSelectStart, messageSelectEnd).split("*").join("").split("_").join("").split("~").join("").split("```").join("");

    let newMessage = `${messageValue.substring(0, messageSelectStart)} ${wrap}${messageSelected}${wrap} ${messageValue.substring(messageSelectEnd)}`;

    setMessage(newMessage);
  }

  return (
    <form
      className="form-message form-message-whatsapp"
      onSubmit={handleSubmit(submitWhatsapp)}
    >
      <div className="input-field input-field--phone">
        <label htmlFor="tel-field">No. Telepon</label>
        <div className="input-wrapper">
          <input
            type="number"
            id="tel-field"
            className="tel-field"
            placeholder="81234xxxx"
            {...register("tel_field", { required: true, minLength: 6, pattern: /^[0-9]+$/i })}
          />
          <select className="select-phonecode" defaultValue="+62" {...register("phonecode_field")}>
            {phoneCode.map((item, key) => {
              return(
                <option value={item.dialCode} key={key}>{item.dialCode}</option>
              );
            })}
          </select>
        </div>
        {errors.tel_field && (
          <FieldValidate label={err_label} type={err_type} />
        )}
      </div>
      <div className="input-field">
        <label htmlFor="message-field">Isi Pesan</label>
        <div className="input-wrapper">
          <textarea id="message-field" value={message} {...register("message_field")} onChange={(e) => { setElMessage(e.target); setMessage(e.target.value); } } />
        </div>
      </div>
      <div className="action-field">
        <div className="toolbar-fields">
          <button className="toolbar-action toolbar-action--bold" aria-hidden="true" onClick={(e)=>toolbarAction(e, "*")}><RiBold/></button>
          <button className="toolbar-action toolbar-action--italic" aria-hidden="true" onClick={(e)=>toolbarAction(e, "_")}><RiItalic/></button>
          <button className="toolbar-action toolbar-action--strikethrough" aria-hidden="true" onClick={(e)=>toolbarAction(e, "~")}><RiStrikethrough/></button>
          <button className="toolbar-action toolbar-action--monospace" aria-hidden="true" onClick={(e)=>toolbarAction(e, "```")}><RiFontSize/></button>
        </div>
        <button type="submit" className="cta-submit">Kirim Pesan</button>
      </div>
    </form>
  );
}

export default FormWhatsapp;
