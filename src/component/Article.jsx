import React from 'react';
import Image from './Image';
import { Helmet, HelmetProvider} from 'react-helmet-async';
import FaviconLogo from '/assets/favicons/favicon.png';

import './Article.css';

function Article(props) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{props.content.title} - Noneedsave</title>
                <meta name="title" content={`${props.content.title} - Noneedsave`} />
                <meta name="description" content={props.content.metadesc} />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://noneedsave.web.app/" />
                <meta property="og:title" content={`${props.content.title} - Noneedsave`} />
                <meta property="og:description" content={props.content.metadesc} />
                <meta property="og:image" content={FaviconLogo} />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://noneedsave.web.app/" />
                <meta property="twitter:title" content="Mulai Percakapan di Whatsapp - Noneedsave" />
                <meta property="twitter:description" content="Memulai percakapan di Whatsapp tanpa harus menyimpan dan dengan fitur editor yang tampil simple dan mudah digunakan" />
                <meta property="twitter:image" content={FaviconLogo} />
            </Helmet>
            <article className="site-article">
                <Image src={FaviconLogo} alt="Logo Noneedsave" />
                <h1 className="title-article">{props.content.title}</h1>
                <div dangerouslySetInnerHTML={{__html: props.content.desc}} />
            </article>
        </HelmetProvider>
    )
}

export default Article;