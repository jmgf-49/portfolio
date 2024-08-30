<script>
    export let title;
    export let url;
</script>
<div id="badge">
    {#if url}
    <a href="{url}" target="_blank" rel="noopener noreferrer">{title}</a>
    {:else}
    <p>{title}</p>
    {/if}
</div>
<style>
    @media (min-width: 1200px) {
        #badge{
            position: relative;
        }
        
        #badge a{
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg);
            font-weight: 700;
            padding: 1em;
            border-radius: 25px;
            color: white;
            text-decoration: none;
            transition: 0.2s ease
        }
        
        #badge a:hover{
            scale: 1.2;
        }
    }
    
    @media (max-width: 1199px) {
        #badge{
            position: relative;
            margin: auto;
            display: inline-block;
        }
        
        #badge a{
            background: var(--dark-accent);
            font-weight: 700;
            padding: 1em;
            border-radius: 25px;
            color: white;
            text-decoration: none;
            transition: 0.2s ease
        }
        
        #badge a:hover{
            scale: 1.2;
        }
    }
    
</style>