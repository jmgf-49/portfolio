<script>
    const workEXP = [{
        title: "FPCS - <span style='color: var(--light-accent)'>Administrador de Sistemas Informáticos y Redes</span>, DataMonitoring S.L - Villalba (Lugo)",
        description: "Durante el periodo de practicas, me encargaron aprender Angular y desarrollar la aplicación que tengo publicada como “A_random_application_of_water_sensors”.",
        duration: "3 Meses<br>(Practicas)"   
    },
    {
        title: "FPCM - <span style='color: var(--light-accent)'>Sistemas Microinformáticos y Redes</span>, Norvoz - Viveiro (Lugo)",
        description: "En este periodo de practicas, se me encargó de aprender a montar servidores online, encriptados y seguros de SSH, FTP, de Correo y Web, adicionalmente, se me puso a estudiar JavaScript y MySQL",
        duration: "3 Meses<br>(Practicas)"
    }
    ]
    
</script>

<article id="experience">
    <div id="text">
        <h1>Experiencia Laboral</h1>
        <hr>
        <br>
        {#each workEXP as work}
        <div id="grid">
            <header>
                <p class="duration">{@html work.duration}</p>
            </header>
            <h3>{@html work.title}</h3>
            <p>{work.description}</p>
        </div>
        <hr>
        <br>
        {/each}
    </div>
    
</article>
<style>
    @media (min-width: 1200px) {
        #experience{
            width: 100%;
            margin: auto;
            padding: 1em;
            
            background: radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent) 17.5px 17.5px, linear-gradient(#4C554850 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px, linear-gradient(90deg, #4C554850 1.4000000000000001px, #11151D 1.4000000000000001px) -0.7000000000000001px 0;
            background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
            
            height: calc(100dvh - 64px)!important;
        }
        div#text{
            max-width: 900px;
            margin: auto;
        }
        
        h1{
            font-size: 3em;
            margin: 2em;
            text-align: center;
        }
        
        #grid{
            display: grid;
            grid-template-columns: 1fr 3fr;
            
            gap: 1em;
            
        }
        
        h3{
            font-size: 1.5em;
        }
        
        p{
            font-size: 1.1em;
            margin-bottom: 3em;
            grid-column: 2/3;
        }
        header{
            text-align: right;
            color: #ffffff80;
        }
    }
    
    @media (max-width: 1199px) {
        #experience{
            height: calc(100dvh - 64px);
            overflow-y: hidden;
            
        }
        h1{
            font-size: 2em;
            margin: 2em auto;
            text-align: center;
        }
        
        #grid{
            display: grid;
            grid-template-columns: 80px 1fr;
            grid-template-rows: repeat(2, min-content);
            gap: 1em;
            margin-bottom: 1em;
            padding: 1em;
            
        }
        
        h3{
            font-size: 1em;
            margin-bottom: -1em;
        }
        
        p{
            font-size: 1em;
            text-wrap: balance;
            margin-bottom: 2em;
            grid-column: 1/3;
            text-align: center;
        }
        
        header{
            font-size: 0.8em;
            text-align: right;
            color: #ffffff80;
        }
    }
</style>
