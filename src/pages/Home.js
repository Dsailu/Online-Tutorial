import React from 'react';
import ReactDOM from 'react-dom';
import './Home.css'


function Home(){
    return(
        <div className="wrapper">
            <Card
                img="https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-1024.png"
                title="HTML"
                description="HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is the combination of Hypertext and Markup language."
            />
            <Card
                img="https://st.depositphotos.com/1796420/4113/v/600/depositphotos_41138921-stock-illustration-vector-icon-of-orange-javascript.jpg"
                title="JavaScript"
                description="JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages."/>
            <Card
                img="https://ih1.redbubble.net/image.352416471.2750/flat,550x550,075,f.u1.jpg"  
                title="MongoDB"
                description="MongoDB is a scalable, flexible NoSQL document database platform designed to overcome the relational databases approach and the limitations of other NoSQL solutions."/>
            <Card
                img="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
                title="React"
                description="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies."/>     
        </div>
    )
}

function Card(props) {
  return (
    <div className='card'>
        <div className="card_body">
            <img src={props.img} className="card_image"/>
            <h2 className="card_title">{props.title}</h2>
            <p className="card_description">{props.description}</p>
            <button className="card_btn">Get Started</button>
        </div>
    </div>
  )
}

export default Home;