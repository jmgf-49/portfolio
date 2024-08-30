<script>
    import Card from '$lib/components/card.svelte'
    let socials = [
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/jmgf49",
        svg: '<svg color="#0077B5" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>'
    },
    {
        name: "Github",
        url: "https://github.com/jmgf-49",
        svg: '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>'
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/jmgf_49/",
        svg: '<svg color="#FFC107" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>'
    }
    ]
</script>
<article id="about">
    <div id="text">
        <h1>Un poquito sobre mi.</h1>
        
        <Card>
            <p>
                Soy un Técnico Superior de Administración de Sistemas y Redes que se adentra en otros campos por curiosidad y por motivos personales.
            </p>
        </Card>
        <Card>
            <p>
                He estudiado 2 Formaciones Profesionales, una FP de Grado Medio de SMR y una FP de Grado Superior de ASIR
            </p>
        </Card>
        <Card>  
            <p>
                En la actualidad, me encargo de aprender de forma autodidacta HTML, CSS, JS y Svelte.
            </p>
        </Card>
        <Card>
            <p>
                Empecé a sentir curiosidad sobre el desarrollo web en 1º ESO, donde ya intentaba hacer algo con HTML, CSS y JS, pero solo lograba hacer lo básico de HTML.
            </p>
        </Card>
        <Card>
            <div class="hobbies">
                <p>
                    Me dedico a entretenerme aprendiendo en diferentes sectores, como:
                </p>
                <ul>
                    <li>Creación de contenido</li>
                    <li>Fotografía</li>
                    <li>Música</li>
                    <li>Edición de audiovisuales</li>
                </ul>
            </div>
        </Card>
        <Card >
            {#each socials as social}
            <div id="{social.name}" class="social">
                
                <a href="{social.url}">{@html social.svg} {social.name}</a>
            </div>
            {/each}
        </Card>
    </div>
</article>

<style>
    @media (min-width: 1200px) {
        #about{
            width: 100%;
            margin: auto;
            height: 100dvh;
            
            background: radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent) 17.5px 17.5px, linear-gradient(#4C554850 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px, linear-gradient(90deg, #4C554850 1.4000000000000001px, #11151D 1.4000000000000001px) -0.7000000000000001px 0;
            background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
            
        }
        div#text{
            max-width: 900px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            place-content: center;
            gap: 2em;
        }
        
        h1{
            font-size: 3em;
            margin: 0.5em;
            grid-column: span 2;
        }
        
        h1::before{
            content:'· ';
        }
        
        p, ul, li{
            margin: 0.8em;
            font-size: 1.1em;
        }
        
        
        p:not(div.hobbies p), div.hobbies{
            min-height: 150px;
            display: flex;
            flex-direction: column;
            place-content: center;
        }
    }
    
    
    @media (max-width: 1199px) {
        h1{ 
            padding: 2em;
            font-size: 3em;
        }
        
        #about{
            width: 100%;
            margin: auto;
            background: radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent) repeat,
            radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent) 17.5px 17.5px repeat,
            linear-gradient(#4C554850 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px repeat,
            linear-gradient(90deg, #4C554850 1.4000000000000001px, #11151D 1.4000000000000001px) -0.7000000000000001px 0 repeat;
            background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
            background-position: 0 0;
            height: calc(100dvh - 64px);
            overflow-y: scroll;
        }
        div#text{
            max-width: 900px;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr;
            place-content: center;
            gap: 2em;
        }
        
        p, ul, li{
            margin: 1.5em;
            font-size: 1.1em;
        }
    }
    #Linkedin a{
        color: #0077B5;
    }
    
    #Github a{
        color: white;
    }
    
    #Instagram a{
        color: #FFC107;
    }
    .social{
        display: flex;
        max-width: 100%;
        flex-direction: column;
        padding: 1em;
    }
    
    .social a{
        text-decoration: none;
        text-align: left;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid currentColor;
        padding: 1em; 
        transition: 0.2s ease;
        
    }
    
    .social a:hover{
        scale: 1.1;
    }
</style>