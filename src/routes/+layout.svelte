<script>
  import Navbar from '$lib/components/navbar.svelte';
  import '$lib/styles/app.css'
  import { onNavigate } from '$app/navigation';

  export const prerender = true;
  
  
  onNavigate(({ to, from }) => {
    const toUrl = new URL(to.url);
    const fromUrl = new URL(from.url);
    
    if (toUrl.pathname === fromUrl.pathname && toUrl.search === fromUrl.search) return;
    
    if (!document.startViewTransition) return;
    
    return new Promise((fulfil) => {
      document.startViewTransition(() => new Promise(fulfil))
    })
  });
  
</script>

<Navbar />

<main>  
  <slot />
</main>


<style>
  
  @media (max-width: 1199px) {
    main{
      height: 100%;
      view-transition-name: main;
    }}
    
    @media (min-width: 1200px) {
      main{
        height: 100vh;
        margin-left: var(--nav-width);
        view-transition-name: main;
      }
    }
  </style>