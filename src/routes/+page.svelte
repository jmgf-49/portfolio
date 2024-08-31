<script>
    import Avatar from "$lib/assets/me.webp";
    import Badge from "$lib/components/badge.svelte";
    
</script>

<article id="welcome">
    <div id="Quote" class="mobilehidden">
        <h1>"Yet, Not enough"</h1>
    </div>
    <div id="info">
        <div id="text">
            <h1><span>Buenas</span>, soy <abbr title="Sin Tilde">Jose</abbr> Manuel Guirado</h1>
            <p>
                <span>Recién iniciado en el desarrollo web, con 6 meses de experiencia</span> y formación reciente en <span>Administración de Sistemas y Redes</span>.
                <span>Tengo 21 años, residente de Galicia, España.</span>
                Concentrado en aprender HTML, CSS, JS y Svelte en su totalidad.
            </p>
        </div>
    </div>
    <figure id="avatar">
        <img src={Avatar} alt="JM Guirado avatar" />
        <div>
            <Badge 
            title="Disponible para contrato" 
            url="https://www.linkedin.com/in/jmgf49"/>
        </div>
        
    </figure>           
    
</article>

<style>
    
    abbr{
        text-decoration: none;
    }
    @media (min-width: 1200px) {
        #welcome{
            height: 100dvh;
            background: linear-gradient(90deg,var(--bg) 0% 50%, var(--dark-accent) 50% 100%);
            display: grid;
            grid-template-areas: "info avatar";
            grid-template-columns: repeat(2,1fr);    
        }
        
        #info{
            grid-area: info;
            height: 100dvh;
            padding: 0 2em;
            display: grid;
            
            place-content: center;
            
            background-color: #11151D;
            opacity: 1;
            background: radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent) 17.5px 17.5px, linear-gradient(#4C554850 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px, linear-gradient(90deg, #4C554850 1.4000000000000001px, #11151D 1.4000000000000001px) -0.7000000000000001px 0;
            background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
        }
        
        #info h1{
            font-size: 3em;
            margin-bottom: 0.5em;
            color: #ffffffc0;
            margin-left: 0.5em;
            
        }
        
        #info p{
            font-size: 1.6em;
            text-wrap: balance;
            color: #ffffffc0;
            line-height: 1.3em; 
            margin-left: 1em;
        }
        #avatar{
            grid-area: avatar;
            display: flex;
            place-content: center;
            align-items: center;
            gap: 2em;
            flex-direction: column;
            background-color: #4C5548;
            opacity: 1;
            background-image:  linear-gradient(#11151D50 0.7000000000000001px, transparent 0.7000000000000001px), linear-gradient(to right, #11151D50 0.7000000000000001px, #4C5548 0.7000000000000001px);
            background-size: 14px 14px;
        }
        
        #avatar img{
            width: clamp(200px, 100%, 600px);
            aspect-ratio: 1/1;
            border-radius: 32% 68% 42% 58% / 52% 34% 66% 48%  ;
            
            
        }
        
        #Quote{
            font-style: italic;
            top: 0;
            position: absolute;
            padding: 1em;
            color: #ffffff80;
        }
        
        #Quote::before{
            content: '';
            background: linear-gradient(90deg, #ffffff80 0% 70%, transparent 70% 75%, #ffffff80 75% 80%, transparent 80% 85%, #ffffff80 85% 90%, transparent 90% 100%);
            position: absolute;
            width: 100%;
            height: 2px;
            top: 90%;
            left: 40%;
            transform: translate(-30%,-100%);
        }
    }
    @media (max-width: 1199px) {
        .mobilehidden{
            display: none;
        }
        #welcome{
            height: calc(100lvh - 64px);
            background: radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent) 17.5px 17.5px, linear-gradient(#4C554850 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px, linear-gradient(90deg, #4C554850 1.4000000000000001px, #11151D 1.4000000000000001px) -0.7000000000000001px 0;
            background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 1em;
            padding: 2em;
            text-align: center;
        }

        #text h1{
            font-size: 2.2em;
            margin-bottom: 1em;
        }
        #text p{
            font-size: 1.1em;
            text-wrap: pretty;
        }
        
        #info, #avatar{
            position: absolute;
            max-width: 700px;
            margin: auto;
            margin-bottom: 1em;
        }
        #avatar{
            display: grid;
            place-content: center;
            margin: auto;
            bottom: 64px;
        }
        
        #avatar img{
            width: clamp(100px, 50%, 300px);
            aspect-ratio: 1/1;
            margin: auto;
            border-radius: 32% 68% 42% 58% / 52% 34% 66% 48%  ;
            margin: 0em auto auto auto;
        }
        #avatar div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1em;

            margin:4em auto auto auto;
        }    
        
    }
    
    #info span:nth-of-type(even){
        color: var(--extras-two);
    }
    
    #info span:nth-of-type(odd){
        color: var(--light-accent);
    }
</style>