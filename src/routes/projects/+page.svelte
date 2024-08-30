<script>
    import Card from "$lib/components/card.svelte";
    import project1 from "$lib/assets/project1.webp";
    
    const projects = [
    {
        name: "A random application of water sensors",
        acron: "FP-CS 2024 - Proyecto de Angular",
        src: project1,
        description: "Este es el primer proyecto que hice con Angular, hace 3 meses, en el cual aprendi a montar una aplicación de monitorización de sensores de agua. El proyecto fue un gran desafío para aprender sobre JS, TS, y Angular",
        github: "https://github.com/jmgf-49/a_random_application_of_water_sensors",
        web: "https://jmgf-49.github.io/a_random_application_of_water_sensors/"
    }
    ]
</script>
<article id="projects">
    {#each projects as project}
    <Card title={project.name} description={project.acron} image={project.src}>
        <p>{project.description}</p>
        <div id="buttons">
            {#if project.github}
            <a href="{project.github}" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg> Github</a>
            {/if}
            {#if project.web}
            <a href="{project.web}" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-package"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>Ver app web</a>
            {/if}
        </div>
    </Card>
    {/each}
</article>

<style>
    #projects{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1em;
        padding: 1em;
        background-color: #3b3b3b;
        opacity: 1;
        background: radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #11151D 20%, #11151D 80%, transparent 80%, transparent) 17.5px 17.5px, linear-gradient(#4C554850 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px, linear-gradient(90deg, #4C554850 1.4000000000000001px, #11151D 1.4000000000000001px) -0.7000000000000001px 0;
        background-size: 35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px;
        height: 100vh;
        
    }
    
    #buttons{
        margin: 1.2em 0.5em 0.5em 0.5em;
        display: flex;
        gap: 1em;
        justify-content: space-between;
        align-items: center;}
        
        #buttons a{
            text-decoration: none;
            color: var(--text);
            display: flex;
            align-items: center;
            background: var(--dark-accent);
            padding: 0.5em 1em;
            border-radius: 25px;
        }
    </style>
    
    
