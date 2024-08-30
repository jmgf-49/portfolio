<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  
  function handleClick(event) {
    const target = event.target;
    const navLinksElements = document.querySelectorAll('.nav-link');
    
    navLinksElements.forEach((element) => {
      element.classList.remove('active');
    });
    
    target.classList.add('active');
  }
  
  let navLinks = [
  { id: 'portfolio/', text: 'Inicio' },
  { id: 'portfolio/projects', text: 'Proyectos' },
  { id: 'portfolio/experience', text: 'Experiencia' },
  { id: 'portfolio/about', text: 'Sobre mi' },
  ];
  
  const social = [{
    name: "GitHub",
    link: "https://github.com/jmgf-49",
    svg: '<svg color="white" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" /></svg>'
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jmgf49",
    svg: '<svg color="white" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>'
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jmgf_49/",
    svg: '<svg color="white" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>'
  }]                  
  onMount(() => {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('button');
    const menuLinks = document.querySelectorAll('.mobilenav a');
    
    function openMenu() {
      menu.classList.add('active');
    }
    
    function closeMenu() {
      menu.classList.remove('active');
    }
    
    menuToggle.addEventListener('click', function() {
      if (menu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });
    
    document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });
  });
</script>

<nav class="">
  <div class="navlinks mobilehidden">
    <ul>
      {#each navLinks as link}
      <li aria-current={$page.url.pathname === '/'+link.id ? 'page' : undefined}>
        <a
        href={`/${link.id}`}
        class={`nav-link ${link.id === '' ? 'active' : ''}`}
        on:click={handleClick}
        >
        {link.text}
      </a>
    </li>
    {/each}
  </ul>
</div>
<div class="navsocial mobilehidden">
  {#each social as item}
  <a data-sveltekit-preload-data="hover" href="{item.link}" target="_blank">{@html item.svg}</a>
  {/each}
</div>
<h1 class="pchidden">JM Guirado Fernandez</h1>
<svg id="button" class="pchidden" xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
<div id="menu" class="pchidden mobilenav">
  {#each navLinks as link}
  <a
  href={`/${link.id}`}
  class={`nav-link ${link.id === '' ? 'active' : ''}`}
  on:click={handleClick}
  >
  {link.text}
</a>
{/each}
</div>
</nav>

<style>
  @media (min-width: 1200px) {
    .pchidden{
      display: none;
      opacity: 0;
      visibility: hidden;
    }
    
    nav{
      background-color: var(--dark-accent);
      width: var(--nav-width);
      display: flex;
      flex-direction: row;
      align-items: center;
      position: fixed;
      justify-content: space-between;
      writing-mode: vertical-lr;
      height: 100dvh;
      z-index: 999;
    }
    
    ul{
      list-style: none;
      height: 100%;
      padding: 0;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-around;
    }
    
    .navlinks{
      transform: rotate(180deg);
      display: flex;
      width: 100%;
      flex-direction: row-reverse;
      justify-content: space-around;
      align-items: center;
      height: 80%;
      
    }
    .navlinks a{
      color: white;
      text-decoration: none; 
      font-size: 1.1em;
      font-weight: 700;
      padding: 1em 0.5em;
      border-radius: 25px;
      z-index: 999;
      
    }
    
    .navlinks ul li{
      transition: 0.2s ease;
    }
    
    .navlinks ul li:hover{
      scale: 1.2;
    }
    
    .navsocial{
      display: flex;
      height: 20%;
      color: white;
      justify-content: space-evenly;
      gap: 1em;
    }
    .navsocial a{
      scale: 1.2;
      transition: 0.2s ease;
    }
    
    .navsocial a:hover{
      scale: 1.4;
    }
    
    
    li {
      position: relative;
      z-index: 999;
    }
    
    li[aria-current='page']::after {
      content: '';
      width: 5px;
      height: 100%;
      position: absolute;
      top: -50%;
      left: -50%;
      transform: translate(0%, 50%);
      z-index: -1;
      background: var(--extras-two);
      border-radius: 25px;
      view-transition-name: navbutton;
    }
    
  }
  @media (max-width: 1199px) {
    .mobilehidden{
      display: none;
      opacity: 0;
      visibility: hidden;
    }
    
    nav{
      background-color: var(--dark-accent);
      width: 100% ;
      display: flex;
      height: 64px;
      justify-content: space-between;
      align-items: center;
      padding: 1em;
    }
    
    nav svg{
      scale: 2;
    }
    
    .mobilenav{
      position: absolute;
      background-color: var(--bg);
      display: flex;
      flex-direction: column;
      z-index: 1;
      left: 0;
      top: 64px;
      width: 100dvw;
      padding: 0em 1em;
      gap: 2em;
      height: 0;
      overflow: hidden;
      transition: 0.5s ease, ;    
      opacity: 0;
    }
    
    :not(a).active {
      height: max-content;
      padding: 1em;
      opacity: 1;
      transition: opacity 50ms linear;
    }
    
    .mobilenav a{
      color: white;
      text-decoration: none;
      font-size: 1.1em;
      font-weight: 700;
    }
    
    a.active::before{
      content:">  "
    }
  }
</style>