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
  } = useForm({
    mode: 'onBlur',
  });

	const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    mode: 'onBlur',
  });

  const submitUsername = (data) => {
    window.open(`https://t.me/${data.username_field}`, '_blank')
    return false;
  };

	const submitMessage = (data) => {
    window.open(`https://t.me/share/url?url=Link Website: ${data.link_field}&text=${data.message_field}`, '_blank')
    return false;
  };

  let err_labelUsername = "Isi username dengan benar.";
  let err_typeUsername = "error";

  if(errors.username_field?.type === "minLength") {
    err_labelUsername = "Periksa jumlah huruf username telegram.";
    err_typeUsername = "warn";
  }

	let err_labelLink = "Isi url atau link website dengan benar.";
  let err_typeLink = "error";

  if(errors2.link_field?.type === "minLength") {
    err_labelLink = "Periksa url atau link website.";
    err_typeLink = "warn";
  }

  const [elMessage, setElMessage] = useState([]);
  const [message, setMessage] = useState("");
  
  const toolbarAction = (e, wrap) => {
    e.preventDefault();
    let messageValue = elMessage.value;
    let messageSelectStart = elMessage.selectionStart;
    let messageSelectEnd = elMessage.selectionEnd;

    let messageSelected = messageValue.substring(messageSelectStart, messageSelectEnd).split("**").join("").split("__").join("").split("~~").join("").split("`").join("");

    let newMessage = `${messageValue.substring(0, messageSelectStart)} ${wrap}${messageSelected}${wrap} ${messageValue.substring(messageSelectEnd)}`;

    setMessage(newMessage);
  }

  return (
    <>
      <form
        className="form-message form-message-telegram form-message-telegram--username"
        onSubmit={handleSubmit(submitUsername)}
      >
        <div className="input-field input-field--username">
          <label htmlFor="username-field">Username</label>
          <input
              type="text"
              id="username-field"
              className="username-field"
              {...register("username_field", { required: true, minLength: 5, pattern: /^[A-Za-z0-9]+$/i })}
            />
          {errors.username_field && (
            <FieldValidate label={err_labelUsername} type={err_typeUsername} />
          )}
        </div>
        <div className="action-field">
          <button type="submit" className="cta-submit">Buat Pesan</button>
        </div>
      </form>

      <form
        className="form-message form-message-telegram form-message-telegram--link"
        onSubmit={handleSubmit2(submitMessage)}
      >
        <div className="input-field input-field--link">
          <label htmlFor="tel-field">Link Website</label>
          <input
						type="text"
						id="link-field"
						className="link-field"
						{...register2("link_field", { required: true, minLength: 4, pattern: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi })}
					/>
          {errors2.link_field && (
            <FieldValidate label={err_labelLink} type={err_typeLink} />
          )}
        </div>
        <div className="input-field">
          <label htmlFor="message-field">Isi Pesan</label>
          <div className="input-wrapper">
            <textarea id="message-field" value={message} {...register2("message_field")} onChange={(e) => { setElMessage(e.target); setMessage(e.target.value); } } />
          </div>
        </div>
        <div className="action-field">
          <div className="toolbar-fields">
            <button className="toolbar-action toolbar-action--bold" aria-hidden="true" onClick={(e)=>toolbarAction(e, "**")}><RiBold/></button>
            <button className="toolbar-action toolbar-action--italic" aria-hidden="true" onClick={(e)=>toolbarAction(e, "__")}><RiItalic/></button>
            <button className="toolbar-action toolbar-action--strikethrough" aria-hidden="true" onClick={(e)=>toolbarAction(e, "~~")}><RiStrikethrough/></button>
            <button className="toolbar-action toolbar-action--monospace" aria-hidden="true" onClick={(e)=>toolbarAction(e, "`")}><RiFontSize/></button>
          </div>
          <button type="submit" className="cta-submit">Kirim Pesan</button>
        </div>
      </form>
    </>
  );
}

export default FormWhatsapp;
