import React from 'react'
import './css/article.css'

import image from '../img/téléchargement.jpeg'


function Article() {
    return (
        <article>
            <section>
                <img src={image} alt=""/>
                <div className="article-text">
                    <h1>mon premier article</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, praesentium est, sint suscipit voluptates aut vero sunt ipsum ipsam quia magnam odit nihil iure mollitia, voluptate exercitationem commodi quod dolorem. Dignissimos nobis vero illo! Odio rerum vitae repellendus nobis praesentium!</p>
                    

                </div>

            </section>
            <section>
                <img src={image} alt=""/>
                <div className="article-text">
                    <h1>mon premier article</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, praesentium est, sint suscipit voluptates aut vero sunt ipsum ipsam quia magnam odit nihil iure mollitia, voluptate exercitationem commodi quod dolorem. Dignissimos nobis vero illo! Odio rerum vitae repellendus nobis praesentium!</p>
                    

                </div>

            </section>
            
        
            
        </article>
    )
}

export default Article
