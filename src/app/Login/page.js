'use client'
// pages/index.js
import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import Link from "next/link";
import React, {useRef} from "react";
import UserCharts from "@/app/components/UserCharts";
import HeaderBar from '../components/HeaderBar';
import Welcome from "@/app/components/Welcome";


export default function Home() {
    const sectionRefs = {
        home: useRef(null),
        tradition: useRef(null),
        moderne: useRef(null),
        quiz: useRef(null),
        community: useRef(null),
        anmelden: useRef(null)
    };
    const menuItems = [

        {id: 'tradition', title: "Tradition"},
        {id: 'moderne', title: "Moderne"},
        {id: 'quiz', title: "Rezepte"},
        {id: 'community', title: "Community"},
        {id: 'anmelden', title: "Anmelden"}
    ];
    const handleScroll = (section) => {
        switch (section) {
            case 'anmelden':
                window.location.href = '/Login';
                break;
            case 'home':
                window.location.href = './';
                break;
            case 'tradition':
                window.location.href = './#tradition';
                break;
            case 'moderne':
                window.location.href = './#moderne';
                break;
            case 'quiz':
                window.location.href = './#quiz';
                break;
            case 'community':
                window.location.href = './#community';
                break;

        }
    };

    return (

        <>
            <div className="Menue">
                <HeaderBar menuItems={menuItems} handleScroll={handleScroll}/>
            </div>
            <div>
                <Head>
                    <title>Melde dich an!</title>
                    <meta name="description" content="Melde dich an und werde Mitglied"/>
                </Head>
                <main>
                    <LoginForm/>
                </main>
            </div>
        </>
    );
}
